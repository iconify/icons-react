import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xgx48ktia.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xgx48ktia"/>`,
		"fallback": "thesvg-color:lambda",
	});
}

export default Component;
