import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ucl5_zvmt.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ucl5_zvmt"/>`,
		"fallback": "f7:lightbulb-slash",
	});
}

export default Component;
