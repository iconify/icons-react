import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fdc7i822q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fdc7i822q"/>`,
		"fallback": "streamline-sharp:notebook-solid",
	});
}

export default Component;
