import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xv_y2cbfb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xv_y2cbfb"/>`,
		"fallback": "simple-icons:microsoftaccess",
	});
}

export default Component;
