import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/thjuvbz3w.css';
import '../../css/u/u-8mgp3zf.css';
import '../../css/i/izn_1xndl.css';
import '../../css/a/a9tarm8wr.css';

const viewBox = {"width":40,"height":40};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="thjuvbz3w"><path class="u-8mgp3zf"/><path class="izn_1xndl"/><path class="a9tarm8wr"/></g>`,
		"fallback": "streamline-stickies-color:mobile-phone-duo",
	});
}

export default Component;
