import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/saf42g1dl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="saf42g1dl"/>`,
		"fallback": "ix:plc",
	});
}

export default Component;
