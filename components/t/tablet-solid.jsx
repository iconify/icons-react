import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hmmn-vnbn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hmmn-vnbn"/>`,
		"fallback": "iconaut:tablet-solid",
	});
}

export default Component;
