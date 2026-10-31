import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bbne24udz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="bbne24udz"/>`,
		"fallback": "sidekickicons:snowflake-solid",
	});
}

export default Component;
