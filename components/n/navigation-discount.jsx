import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jl8jdu0bj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jl8jdu0bj"/>`,
		"fallback": "tabler:navigation-discount",
	});
}

export default Component;
