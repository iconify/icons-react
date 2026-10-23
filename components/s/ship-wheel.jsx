import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zrn6fsfft.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zrn6fsfft"/>`,
		"fallback": "vadivam:ship-wheel",
	});
}

export default Component;
