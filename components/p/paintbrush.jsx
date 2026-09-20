import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v_8egljzq.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v_8egljzq"/>`,
		"fallback": "picon:paintbrush",
	});
}

export default Component;
