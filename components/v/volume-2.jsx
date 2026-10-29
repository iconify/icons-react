import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/enua_svsp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="enua_svsp"/>`,
		"fallback": "vadivam:volume-2",
	});
}

export default Component;
