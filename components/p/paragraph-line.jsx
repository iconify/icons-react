import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sahc2k4su.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sahc2k4su"/>`,
		"fallback": "majesticons:paragraph-line",
	});
}

export default Component;
