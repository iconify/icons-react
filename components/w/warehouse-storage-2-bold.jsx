import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/muv-rs82u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="muv-rs82u"/>`,
		"fallback": "streamline-ultimate:warehouse-storage-2-bold",
	});
}

export default Component;
