import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xgphr9pxy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<ellipse class="xgphr9pxy"/>`,
		"fallback": "akar-icons:oval",
	});
}

export default Component;
