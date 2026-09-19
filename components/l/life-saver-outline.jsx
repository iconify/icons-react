import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nbs_ywbex.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nbs_ywbex"/>`,
		"fallback": "flowbite:life-saver-outline",
	});
}

export default Component;
