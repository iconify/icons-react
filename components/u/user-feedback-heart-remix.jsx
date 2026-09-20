import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jl7pvd6ri.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jl7pvd6ri"/>`,
		"fallback": "streamline-flex:user-feedback-heart-remix",
	});
}

export default Component;
