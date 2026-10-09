import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jl6xnzcek.css';
import '../../css/u/u4btp48pk.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jl6xnzcek"/><path class="u4btp48pk"/>`,
		"fallback": "energy-icons:refinery-20",
	});
}

export default Component;
