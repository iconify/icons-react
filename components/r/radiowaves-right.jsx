import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g7r18vb0t.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g7r18vb0t"/>`,
		"fallback": "f7:radiowaves-right",
	});
}

export default Component;
