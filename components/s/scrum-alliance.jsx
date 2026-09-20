import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h30s1pbtg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h30s1pbtg"/>`,
		"fallback": "thesvg-color:scrum-alliance",
	});
}

export default Component;
