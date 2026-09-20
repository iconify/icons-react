import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xlutzvs1e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xlutzvs1e"/>`,
		"fallback": "reicon:sale-filled",
	});
}

export default Component;
