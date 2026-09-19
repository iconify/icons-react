import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ym3v0_fpk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ym3v0_fpk"/>`,
		"fallback": "cbi:trx",
	});
}

export default Component;
