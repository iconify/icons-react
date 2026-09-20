import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gg5nvhb1v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="gg5nvhb1v"/>`,
		"fallback": "streamline-sharp:light-dark-mode-remix",
	});
}

export default Component;
