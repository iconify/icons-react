import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wq--7gh0x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wq--7gh0x"/>`,
		"fallback": "streamline-ultimate:responsive-design-bold",
	});
}

export default Component;
