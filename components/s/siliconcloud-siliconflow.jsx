import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x4di-tkoo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="x4di-tkoo"/>`,
		"fallback": "thesvg:siliconcloud-siliconflow",
	});
}

export default Component;
