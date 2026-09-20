import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tky61jwtd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tky61jwtd"/>`,
		"fallback": "tabler:mountain-filled",
	});
}

export default Component;
