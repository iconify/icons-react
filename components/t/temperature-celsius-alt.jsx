import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xq6e4izvw.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xq6e4izvw"/>`,
		"fallback": "carbon:temperature-celsius-alt",
	});
}

export default Component;
