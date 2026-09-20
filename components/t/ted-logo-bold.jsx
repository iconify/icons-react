import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wy0q25fis.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wy0q25fis"/>`,
		"fallback": "streamline-ultimate:ted-logo-bold",
	});
}

export default Component;
