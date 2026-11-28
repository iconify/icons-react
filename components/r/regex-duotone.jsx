import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zgq30ub0m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="primary zgq30ub0m"/>`,
		"fallback": "iconaut:regex-duotone",
	});
}

export default Component;
