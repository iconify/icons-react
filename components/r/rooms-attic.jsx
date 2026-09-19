import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eqg0eskzk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eqg0eskzk"/>`,
		"fallback": "cbi:rooms-attic",
	});
}

export default Component;
