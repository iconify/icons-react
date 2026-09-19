import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zoo1qsb6u.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zoo1qsb6u"/>`,
		"fallback": "at-icons:meat-eaten",
	});
}

export default Component;
