import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zvsu9ljnl.css';
import '../../css/w/whpncgbes.css';
import '../../css/l/lr0wsqbzh.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zvsu9ljnl"/><path class="whpncgbes"/><path class="lr0wsqbzh"/>`,
		"fallback": "openmoji:no-stencil",
	});
}

export default Component;
