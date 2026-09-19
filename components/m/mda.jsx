import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bg6z65b8b.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bg6z65b8b"/>`,
		"fallback": "cryptocurrency:mda",
	});
}

export default Component;
