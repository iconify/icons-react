import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s1e1e9bhx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s1e1e9bhx"/>`,
		"fallback": "noviair:milk",
	});
}

export default Component;
