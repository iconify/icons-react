import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nk2oyyb_f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nk2oyyb_f"/>`,
		"fallback": "iconaut:user-x-solid",
	});
}

export default Component;
