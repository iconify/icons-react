import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ck5r02b4w.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ck5r02b4w"/>`,
		"fallback": "f7:layers-fill",
	});
}

export default Component;
