import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gf8d9fbud.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gf8d9fbud"/>`,
		"fallback": "iconaut:number-1-solid",
	});
}

export default Component;
