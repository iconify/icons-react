import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nosxb0x-a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nosxb0x-a"/>`,
		"fallback": "simple-icons:materialformkdocs",
	});
}

export default Component;
