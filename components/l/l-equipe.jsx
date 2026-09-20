import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zdv_r9b4w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zdv_r9b4w"/>`,
		"fallback": "thesvg-color:l-equipe",
	});
}

export default Component;
