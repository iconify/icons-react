import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc6bs2byv.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bc6bs2byv"/>`,
		"fallback": "thesvg-color:sketch-dark",
	});
}

export default Component;
