import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/shdj2qbel.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="shdj2qbel"/>`,
		"fallback": "streamline-sharp:reset-clock-solid",
	});
}

export default Component;
