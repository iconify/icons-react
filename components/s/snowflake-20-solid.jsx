import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ote9-7bkp.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ote9-7bkp"/>`,
		"fallback": "sidekickicons:snowflake-20-solid",
	});
}

export default Component;
