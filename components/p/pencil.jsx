import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f7mn29z_b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f7mn29z_b"/>`,
		"fallback": "pixel:pencil",
	});
}

export default Component;
