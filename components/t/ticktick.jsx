import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cr9somqfu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cr9somqfu"/>`,
		"fallback": "thesvg-color:ticktick",
	});
}

export default Component;
