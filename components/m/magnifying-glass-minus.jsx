import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kfs9dqbro.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kfs9dqbro"/>`,
		"fallback": "fa7-solid:magnifying-glass-minus",
	});
}

export default Component;
