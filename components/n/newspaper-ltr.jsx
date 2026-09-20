import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tcxqr3faj.css';
import '../../css/u/ud305ub0u.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tcxqr3faj"/><path class="ud305ub0u"/>`,
		"fallback": "ooui:newspaper-ltr",
	});
}

export default Component;
