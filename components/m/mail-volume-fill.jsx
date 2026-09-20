import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/thbt_3blk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="thbt_3blk"/>`,
		"fallback": "ri:mail-volume-fill",
	});
}

export default Component;
