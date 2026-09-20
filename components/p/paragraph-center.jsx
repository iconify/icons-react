import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c2pg_dqyb.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c2pg_dqyb"/>`,
		"fallback": "system-uicons:paragraph-center",
	});
}

export default Component;
