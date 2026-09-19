import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gymjopeqw.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gymjopeqw"/>`,
		"fallback": "at-icons:stepper",
	});
}

export default Component;
