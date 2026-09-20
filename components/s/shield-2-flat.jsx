import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/int4-7b_p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="int4-7b_p"/>`,
		"fallback": "streamline-sharp-color:shield-2-flat",
	});
}

export default Component;
