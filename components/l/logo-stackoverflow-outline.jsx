import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cpbhyqbff.css';
import '../../css/j/jl37fgbdb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cpbhyqbff"/><path class="jl37fgbdb"/>`,
		"fallback": "ion:logo-stackoverflow-outline",
	});
}

export default Component;
