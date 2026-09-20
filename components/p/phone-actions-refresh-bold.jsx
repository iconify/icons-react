import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yzdiky75l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yzdiky75l"/>`,
		"fallback": "streamline-ultimate:phone-actions-refresh-bold",
	});
}

export default Component;
