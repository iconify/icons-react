import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u2od1mbmv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u2od1mbmv"/>`,
		"fallback": "mynaui:letter-s-solid",
	});
}

export default Component;
