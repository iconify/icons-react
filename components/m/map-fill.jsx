import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iemye02zh.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iemye02zh"/>`,
		"fallback": "f7:map-fill",
	});
}

export default Component;
