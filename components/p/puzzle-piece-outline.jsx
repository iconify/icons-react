import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/azuu211pg.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="azuu211pg"/>`,
		"fallback": "glyphs:puzzle-piece-outline",
	});
}

export default Component;
