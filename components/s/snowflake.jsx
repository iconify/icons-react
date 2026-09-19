import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/scjnt3k6b.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="scjnt3k6b"/>`,
		"fallback": "fa7-regular:snowflake",
	});
}

export default Component;
