import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ytd48tbtt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ytd48tbtt"/>`,
		"fallback": "streamline-sharp:sharing-data-solid",
	});
}

export default Component;
