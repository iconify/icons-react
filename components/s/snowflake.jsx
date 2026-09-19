import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/om3hmtbzv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="om3hmtbzv"/>`,
		"fallback": "griddy-icons:snowflake",
	});
}

export default Component;
