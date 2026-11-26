import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xl9i5p93o.css';

const viewBox = {"width":69.5,"height":59};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xl9i5p93o"/>`,
		"fallback": "thesvg-color:ramp",
	});
}

export default Component;
