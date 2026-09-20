import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ayvpk_rku.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ayvpk_rku"/>`,
		"fallback": "tdesign:logo-wechatpay",
	});
}

export default Component;
