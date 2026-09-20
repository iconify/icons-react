import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hl8ppyb2r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hl8ppyb2r"/>`,
		"fallback": "simple-icons:redux",
	});
}

export default Component;
