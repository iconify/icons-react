import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e396czbqq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e396czbqq"/>`,
		"fallback": "uil:layers",
	});
}

export default Component;
