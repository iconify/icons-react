import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z6m02jbhc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z6m02jbhc"/>`,
		"fallback": "selfhst:komodo-cd-light",
	});
}

export default Component;
