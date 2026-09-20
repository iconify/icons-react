import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xemmwkqtw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xemmwkqtw"/>`,
		"fallback": "keyline-icons:route-off-sharp",
	});
}

export default Component;
