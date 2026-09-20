import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/d/dikjrmbii.css';
import '../../css/m/m9brxebgt.css';
import '../../css/i/i6juev69h.css';
import '../../css/j/j1mgz9bmb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="dikjrmbii"/><path class="m9brxebgt"/><path class="i6juev69h"/><path class="j1mgz9bmb"/></g>`,
		"fallback": "streamline-sharp-color:shopping-bag-hand-bag-price-tag",
	});
}

export default Component;
