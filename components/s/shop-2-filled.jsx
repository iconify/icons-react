import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kis6e-brh.css';
import '../../css/v/vefb5s21n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kis6e-brh"/><path class="vefb5s21n"/>`,
		"fallback": "tdesign:shop-2-filled",
	});
}

export default Component;
