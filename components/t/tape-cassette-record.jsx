import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/w/wckqyac5z.css';
import '../../css/v/vqc_nlbrx.css';
import '../../css/a/a0prsobyx.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="wckqyac5z"/><path class="vqc_nlbrx"/><path class="a0prsobyx"/></g>`,
		"fallback": "streamline:tape-cassette-record",
	});
}

export default Component;
