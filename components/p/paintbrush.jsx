import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rzz6dhkzc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rzz6dhkzc"/>`,
		"fallback": "vadivam:paintbrush",
	});
}

export default Component;
