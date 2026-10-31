import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zy1w_4b4p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zy1w_4b4p"/>`,
		"fallback": "coolicons:mobile-upload-corner-fill-round",
	});
}

export default Component;
