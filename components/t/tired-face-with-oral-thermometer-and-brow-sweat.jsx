import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xijr_zb0o.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xijr_zb0o"/>`,
		"fallback": "pinhead:tired-face-with-oral-thermometer-and-brow-sweat",
	});
}

export default Component;
