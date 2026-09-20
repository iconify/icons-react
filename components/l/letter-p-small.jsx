import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xnfi_dhky.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xnfi_dhky"/>`,
		"fallback": "tabler:letter-p-small",
	});
}

export default Component;
