import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zxri2ddjc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zxri2ddjc"/>`,
		"fallback": "fontisto:share",
	});
}

export default Component;
