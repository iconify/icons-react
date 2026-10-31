import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gu1_xgbbd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gu1_xgbbd"/>`,
		"fallback": "withicons:paint-roller-gloss",
	});
}

export default Component;
