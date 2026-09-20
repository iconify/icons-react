import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zzq0igb5t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zzq0igb5t"/>`,
		"fallback": "proicons:microsoft",
	});
}

export default Component;
