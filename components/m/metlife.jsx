import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x0qnneyrt.css';

const viewBox = {"width":88.46,"height":21.17};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x0qnneyrt"/>`,
		"fallback": "thesvg-color:metlife",
	});
}

export default Component;
