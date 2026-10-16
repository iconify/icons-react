import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hcc368ecc.css';

const viewBox = {"width":712.96,"height":712.96,"left":-346.211,"top":-706.48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hcc368ecc"/>`,
		"fallback": "thesvg-color:pocket-id-dark",
	});
}

export default Component;
