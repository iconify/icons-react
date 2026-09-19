import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qw_5fmbug.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qw_5fmbug"/>`,
		"fallback": "f7:person-2-square-stack",
	});
}

export default Component;
