import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/z/zfvmbnb4o.css';
import '../../css/b/bar9-vk_c.css';
import '../../css/m/m-sdp78df.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="zfvmbnb4o"/><path class="bar9-vk_c wm-a"/><path class="m-sdp78df wm-s"/></g>`,
		"fallback": "withicons:mistletoe-solid",
	});
}

export default Component;
