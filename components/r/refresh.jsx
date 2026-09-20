import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v07et2bvc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v07et2bvc"/>`,
		"fallback": "uis:refresh",
	});
}

export default Component;
