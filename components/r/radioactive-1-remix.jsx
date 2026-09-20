import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jnjlf8b_x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jnjlf8b_x"/>`,
		"fallback": "streamline-sharp:radioactive-1-remix",
	});
}

export default Component;
