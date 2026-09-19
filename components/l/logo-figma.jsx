import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r9a81jbes.css';
import '../../css/e/efn4s4b6v.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r9a81jbes"/><circle class="efn4s4b6v"/>`,
		"fallback": "famicons:logo-figma",
	});
}

export default Component;
