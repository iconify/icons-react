import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fn_jc1ydb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fn_jc1ydb"/>`,
		"fallback": "noviair-light:settings-check",
	});
}

export default Component;
