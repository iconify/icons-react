import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w72a4dbht.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="w72a4dbht"/>`,
		"fallback": "streamline-sharp:theater-mask-solid",
	});
}

export default Component;
