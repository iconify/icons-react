import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/v/v8krkdb-c.css';
import '../../css/x/x1d515bsr.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="v8krkdb-c"/><path class="x1d515bsr"/></g>`,
		"fallback": "streamline:office-worker",
	});
}

export default Component;
