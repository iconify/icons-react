import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qgh33qb_t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qgh33qb_t"/>`,
		"fallback": "cbi:wdr1",
	});
}

export default Component;
