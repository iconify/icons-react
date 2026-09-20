import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l305lqbci.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="l305lqbci"/>`,
		"fallback": "reicon:upload",
	});
}

export default Component;
