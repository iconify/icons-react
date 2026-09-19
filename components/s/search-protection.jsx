import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jlzyam9bc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jlzyam9bc"/>`,
		"fallback": "griddy-icons:search-protection",
	});
}

export default Component;
