import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ai5_8yjej.css';

const viewBox = {"width":23,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ai5_8yjej"/>`,
		"fallback": "fontisto:quora",
	});
}

export default Component;
