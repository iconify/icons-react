import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l76d3obsw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l76d3obsw"/>`,
		"fallback": "sidekickicons:password-pencil-solid",
	});
}

export default Component;
