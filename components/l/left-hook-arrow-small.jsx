import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m621oab_r.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m621oab_r"/>`,
		"fallback": "dinkie-icons:left-hook-arrow-small",
	});
}

export default Component;
