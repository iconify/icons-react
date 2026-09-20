import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m21o_tg9d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m21o_tg9d"/>`,
		"fallback": "thesvg:preact",
	});
}

export default Component;
