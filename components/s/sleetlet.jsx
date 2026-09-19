import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qc5ft-b7g.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qc5ft-b7g"/>`,
		"fallback": "glyphs-poly:sleetlet",
	});
}

export default Component;
