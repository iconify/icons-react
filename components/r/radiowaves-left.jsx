import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l6719dbrm.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l6719dbrm"/>`,
		"fallback": "f7:radiowaves-left",
	});
}

export default Component;
