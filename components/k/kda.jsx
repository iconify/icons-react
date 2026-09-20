import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eqgyivqlw.css';
import '../../css/v/v_vy3cc5z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eqgyivqlw"/><path class="v_vy3cc5z"/>`,
		"fallback": "token:kda",
	});
}

export default Component;
