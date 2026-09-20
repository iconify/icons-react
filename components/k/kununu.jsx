import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xfw-zbcoq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xfw-zbcoq"/>`,
		"fallback": "thesvg:kununu",
	});
}

export default Component;
