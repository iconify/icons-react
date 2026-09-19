import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<polygon points="1.75 14.25 1.75 2.75 14.25 2.75 14.25 11.25 5.75 11.25" class="hntgybcog"/>`,
		"fallback": "charm:message",
	});
}

export default Component;
