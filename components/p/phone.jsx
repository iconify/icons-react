import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jl84s6vhw.css';

const viewBox = {"width":1408,"height":1408};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jl84s6vhw"/>`,
		"fallback": "fa:phone",
	});
}

export default Component;
