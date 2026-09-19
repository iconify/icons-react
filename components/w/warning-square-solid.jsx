import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p0cg2ushw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="p0cg2ushw"/>`,
		"fallback": "iconoir:warning-square-solid",
	});
}

export default Component;
