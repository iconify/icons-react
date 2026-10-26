import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/egx_p66ba.css';
import '../../css/h/h8oeuuwmd.css';

const viewBox = {"width":367.64,"height":360.14,"left":-3.82,"top":-0.07};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="egx_p66ba"/><path class="h8oeuuwmd"/>`,
		"fallback": "thesvg:kubeedge",
	});
}

export default Component;
