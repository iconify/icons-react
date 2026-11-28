import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/abydlvrjr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="abydlvrjr"/>`,
		"fallback": "iconaut:map-pin-sparkles-solid",
	});
}

export default Component;
