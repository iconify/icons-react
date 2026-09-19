import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k5qocqfvv.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k5qocqfvv"/>`,
		"fallback": "f7:textformat",
	});
}

export default Component;
