import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/md3vheezs.css';

const viewBox = {"width":512,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="md3vheezs"/>`,
		"fallback": "thesvg-color:sass",
	});
}

export default Component;
