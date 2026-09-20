import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gl6b8fzab.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="gl6b8fzab"/>`,
		"fallback": "streamline-sharp:moustache-remix",
	});
}

export default Component;
