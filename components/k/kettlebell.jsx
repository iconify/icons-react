import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qly5ijb4f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qly5ijb4f"/>`,
		"fallback": "noviair-light:kettlebell",
	});
}

export default Component;
