import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zzj3n5bit.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zzj3n5bit"/>`,
		"fallback": "pixelarticons:save",
	});
}

export default Component;
