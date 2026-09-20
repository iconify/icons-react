import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bb60eqbtz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="bb60eqbtz"/>`,
		"fallback": "streamline-plump:shopping-basket-1-solid",
	});
}

export default Component;
