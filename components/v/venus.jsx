import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cknmu4bsh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="cknmu4bsh"/>`,
		"fallback": "prime:venus",
	});
}

export default Component;
