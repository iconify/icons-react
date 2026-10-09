import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k97abjb9v.css';
import '../../css/g/gtbcxr-sv.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k97abjb9v"/><path class="gtbcxr-sv"/>`,
		"fallback": "energy-icons:pine-tree-20-bold",
	});
}

export default Component;
