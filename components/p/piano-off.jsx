import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ecpj7nrdg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ecpj7nrdg"/>`,
		"fallback": "mdi:piano-off",
	});
}

export default Component;
