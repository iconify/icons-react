import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jqja1p-lv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jqja1p-lv"/>`,
		"fallback": "vadivam:square-letter-h",
	});
}

export default Component;
