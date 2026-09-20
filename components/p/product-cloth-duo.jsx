import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/thjuvbz3w.css';
import '../../css/j/jq32u2b1d.css';
import '../../css/g/g5pyiybbs.css';
import '../../css/f/ftdsv3nli.css';

const viewBox = {"width":40,"height":40};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="thjuvbz3w"><path class="jq32u2b1d"/><path class="g5pyiybbs"/><path class="ftdsv3nli"/></g>`,
		"fallback": "streamline-stickies-color:product-cloth-duo",
	});
}

export default Component;
