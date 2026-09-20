import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/teg8udb9t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="teg8udb9t"/>`,
		"fallback": "mdi:renminbi",
	});
}

export default Component;
