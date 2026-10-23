import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/az9_e8bky.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="az9_e8bky"/>`,
		"fallback": "vadivam:mail-open",
	});
}

export default Component;
