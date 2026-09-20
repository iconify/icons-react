import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wn3-hqbra.css';
import '../../css/r/r-lddkblj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wn3-hqbra"/><path class="r-lddkblj"/>`,
		"fallback": "stash:signout-alt-light",
	});
}

export default Component;
