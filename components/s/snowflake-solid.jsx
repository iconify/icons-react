import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qv8lb0fxq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qv8lb0fxq"/>`,
		"fallback": "iconaut:snowflake-solid",
	});
}

export default Component;
