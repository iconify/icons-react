import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hajn7cbdw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hajn7cbdw"/>`,
		"fallback": "selfhst:netboot-xyz-light",
	});
}

export default Component;
