import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fzxkhmb9i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fzxkhmb9i"/>`,
		"fallback": "streamline-sharp:table-lamp-2",
	});
}

export default Component;
