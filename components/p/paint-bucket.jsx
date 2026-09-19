import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cv6yotz8k.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cv6yotz8k"/>`,
		"fallback": "bi:paint-bucket",
	});
}

export default Component;
