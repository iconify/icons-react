import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mk2708b9f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mk2708b9f"/>`,
		"fallback": "andrsrxn:parenthesis",
	});
}

export default Component;
