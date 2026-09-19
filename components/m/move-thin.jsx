import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mtkp4jb1m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mtkp4jb1m"/>`,
		"fallback": "iconamoon:move-thin",
	});
}

export default Component;
