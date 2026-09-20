import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ajjt2vrag.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ajjt2vrag"/>`,
		"fallback": "thesvg-color:scania",
	});
}

export default Component;
