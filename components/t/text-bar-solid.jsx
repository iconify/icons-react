import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gr6u22bfc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="gr6u22bfc"/>`,
		"fallback": "streamline-sharp:text-bar-solid",
	});
}

export default Component;
