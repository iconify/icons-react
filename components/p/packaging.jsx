import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k1w3e4bsc.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k1w3e4bsc"/>`,
		"fallback": "wpf:packaging",
	});
}

export default Component;
