import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b__9bgb9d.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="b__9bgb9d"/>`,
		"fallback": "streamline-flex:pine-tree-solid",
	});
}

export default Component;
