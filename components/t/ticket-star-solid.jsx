import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sl_fgnk_x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="sl_fgnk_x"/>`,
		"fallback": "streamline-sharp:ticket-star-solid",
	});
}

export default Component;
