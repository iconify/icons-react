import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c_jl0xt4l.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="c_jl0xt4l"/>`,
		"fallback": "streamline-flex:target-dollar-solid",
	});
}

export default Component;
