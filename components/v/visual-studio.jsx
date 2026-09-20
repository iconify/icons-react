import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xra_zg-lm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xra_zg-lm"/>`,
		"fallback": "uim:visual-studio",
	});
}

export default Component;
