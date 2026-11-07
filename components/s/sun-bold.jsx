import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r9iqk5btj.css';
import '../../css/u/upjyccctb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r9iqk5btj"/><path clip-rule="evenodd" class="upjyccctb"/>`,
		"fallback": "solar:sun-bold",
	});
}

export default Component;
