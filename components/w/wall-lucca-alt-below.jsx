import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ye6zn_bkv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ye6zn_bkv"/>`,
		"fallback": "cbi:wall-lucca-alt-below",
	});
}

export default Component;
