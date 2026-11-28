import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kpd-y_4wx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kpd-y_4wx"/>`,
		"fallback": "noviair:package-plus",
	});
}

export default Component;
