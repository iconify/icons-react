import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zw_au-gcg.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zw_au-gcg"/>`,
		"fallback": "dinkie-icons:keycap-digit-nine-small",
	});
}

export default Component;
