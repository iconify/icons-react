import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jl3lnyh2h.css';
import '../../css/q/q3rs99g9y.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jl3lnyh2h"/><path class="q3rs99g9y"/>`,
		"fallback": "streamline-pixel:money-payments-diamond",
	});
}

export default Component;
