import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z09gg-b_z.css';
import '../../css/a/absjoyb4u.css';
import '../../css/y/y1zrpxbtp.css';
import '../../css/w/wocmnefrx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="z09gg-b_z"/><path class="absjoyb4u"/><path class="y1zrpxbtp"/><path clip-rule="evenodd" class="wocmnefrx"/>`,
		"fallback": "solar:upload-track-bold",
	});
}

export default Component;
