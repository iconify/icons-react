import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zw7d88cbk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zw7d88cbk"/>`,
		"fallback": "tabler:record-mail-off",
	});
}

export default Component;
