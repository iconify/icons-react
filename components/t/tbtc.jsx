import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qq36llb-i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qq36llb-i"/>`,
		"fallback": "token:tbtc",
	});
}

export default Component;
