import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iyl-0kw5y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="iyl-0kw5y"/>`,
		"fallback": "streamline-sharp:pet-friendly-hotel-solid",
	});
}

export default Component;
