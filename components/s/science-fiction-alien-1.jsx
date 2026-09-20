import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nd4a67asn.css';
import '../../css/z/z5oy30bym.css';
import '../../css/c/c84qfybgn.css';
import '../../css/i/igkwyebxh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="nd4a67asn"/><path class="z5oy30bym"/><path class="c84qfybgn"/><path class="igkwyebxh"/></g>`,
		"fallback": "streamline-ultimate-color:science-fiction-alien-1",
	});
}

export default Component;
