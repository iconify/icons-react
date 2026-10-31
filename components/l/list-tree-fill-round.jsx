import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/ph08xqbao.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ph08xqbao"/>`,
		"fallback": "coolicons:list-tree-fill-round",
	});
}

export default Component;
