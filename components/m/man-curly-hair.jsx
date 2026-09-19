import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/r3ut29bwv.css';
import '../../css/v/v_olmacjh.css';
import '../../css/n/njl38_b4g.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="r3ut29bwv"/><path class="v_olmacjh"/><path class="njl38_b4g"/></g>`,
		"fallback": "fluent-emoji-high-contrast:man-curly-hair",
	});
}

export default Component;
