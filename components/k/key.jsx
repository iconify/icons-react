import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n9fxnqbql.css';

const viewBox = {"width":1696,"height":1600};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n9fxnqbql"/>`,
		"fallback": "fa:key",
	});
}

export default Component;
