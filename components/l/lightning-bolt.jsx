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
		"content": `<polygon points="9.25 1.75 2.75 9.25 7.25 9.75 6.75 14.25 13.25 6.75 8.75 6.25" class="hntgybcog"/>`,
		"fallback": "charm:lightning-bolt",
	});
}

export default Component;
