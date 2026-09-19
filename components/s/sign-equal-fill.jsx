import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dpm-t2bup.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="dpm-t2bup"/>`,
		"fallback": "iconamoon:sign-equal-fill",
	});
}

export default Component;
