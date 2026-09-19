import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jqxpd_v_y.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jqxpd_v_y"/>`,
		"fallback": "f7:text-insert",
	});
}

export default Component;
