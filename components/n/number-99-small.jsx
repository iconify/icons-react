import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c20s_fcwx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c20s_fcwx"/>`,
		"fallback": "tabler:number-99-small",
	});
}

export default Component;
