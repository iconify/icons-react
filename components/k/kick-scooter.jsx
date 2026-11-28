import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jl8_86btr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jl8_86btr"/>`,
		"fallback": "noviair:kick-scooter",
	});
}

export default Component;
