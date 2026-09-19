import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bkey5szpp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bkey5szpp"/>`,
		"fallback": "hugeicons:paragraph-bullets-point-01",
	});
}

export default Component;
