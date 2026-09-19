import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d281nsb6a.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d281nsb6a"/>`,
		"fallback": "fa7-regular:newspaper",
	});
}

export default Component;
