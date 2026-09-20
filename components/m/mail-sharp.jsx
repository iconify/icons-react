import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o-0us7bcd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o-0us7bcd"/>`,
		"fallback": "pixelarticons:mail-sharp",
	});
}

export default Component;
