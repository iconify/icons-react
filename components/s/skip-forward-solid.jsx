import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n_yi9saap.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="n_yi9saap"/>`,
		"fallback": "sidekickicons:skip-forward-solid",
	});
}

export default Component;
