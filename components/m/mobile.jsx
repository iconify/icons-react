import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t-532hvpo.css';

const viewBox = {"width":15,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t-532hvpo"/>`,
		"fallback": "fontisto:mobile",
	});
}

export default Component;
