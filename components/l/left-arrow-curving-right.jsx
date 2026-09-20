import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fx61_ej9h.css';
import '../../css/e/eyyhcy0xu.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fx61_ej9h"/><path class="eyyhcy0xu"/>`,
		"fallback": "openmoji:left-arrow-curving-right",
	});
}

export default Component;
