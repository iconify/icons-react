import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nvempykpk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nvempykpk"/>`,
		"fallback": "thesvg-color:sway",
	});
}

export default Component;
