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
		"content": `<polygon points="8 1.75 5.75 5.75 1.75 6.25 4.75 9.75 3.75 14.25 8 12.25 12.25 14.25 11.25 9.75 14.25 6.25 10.25 5.75" class="hntgybcog"/>`,
		"fallback": "charm:star",
	});
}

export default Component;
