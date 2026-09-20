import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ojhdz2bch.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ojhdz2bch"/>`,
		"fallback": "keyline-icons:list-minus-sharp",
	});
}

export default Component;
