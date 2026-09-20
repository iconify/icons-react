import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi8-qhbvi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="bi8-qhbvi"/>`,
		"fallback": "streamline-sharp:rabbit-solid",
	});
}

export default Component;
