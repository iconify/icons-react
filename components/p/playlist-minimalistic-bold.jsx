import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pzsz1rwsm.css';
import '../../css/g/ggufc0siv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="pzsz1rwsm"/><path class="ggufc0siv"/>`,
		"fallback": "solar:playlist-minimalistic-bold",
	});
}

export default Component;
