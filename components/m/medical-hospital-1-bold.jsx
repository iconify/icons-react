import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s7hybswkg.css';
import '../../css/o/o08b9ebzg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s7hybswkg"/><path class="o08b9ebzg"/>`,
		"fallback": "streamline-ultimate:medical-hospital-1-bold",
	});
}

export default Component;
