import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vv85u99su.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vv85u99su"/>`,
		"fallback": "gg:maximize",
	});
}

export default Component;
