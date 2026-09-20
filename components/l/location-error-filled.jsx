import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/at5p92bxo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="at5p92bxo"/>`,
		"fallback": "tdesign:location-error-filled",
	});
}

export default Component;
