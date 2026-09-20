import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tr5g03b_a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tr5g03b_a"/>`,
		"fallback": "thesvg-color:kingston-technology",
	});
}

export default Component;
