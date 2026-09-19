import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jllui1bis.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jllui1bis"/>`,
		"fallback": "griddy-icons:umbrella-alt-02",
	});
}

export default Component;
