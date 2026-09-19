import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fnv37kbxp.css';
import '../../css/r/r-mn_3bec.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fnv37kbxp"/><path class="r-mn_3bec"/>`,
		"fallback": "boxicons:play-circle-alt",
	});
}

export default Component;
