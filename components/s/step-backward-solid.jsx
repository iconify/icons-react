import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g96k_kyhn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="g96k_kyhn"/>`,
		"fallback": "sidekickicons:step-backward-solid",
	});
}

export default Component;
