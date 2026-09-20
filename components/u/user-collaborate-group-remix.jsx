import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c_ddctbrs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="c_ddctbrs"/>`,
		"fallback": "streamline-sharp:user-collaborate-group-remix",
	});
}

export default Component;
