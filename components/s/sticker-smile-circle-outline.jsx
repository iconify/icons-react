import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kxg6ovbpq.css';
import '../../css/s/s4x--jb2i.css';
import '../../css/s/s9cx24dzo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kxg6ovbpq"/><path class="s4x--jb2i"/><path clip-rule="evenodd" class="s9cx24dzo"/>`,
		"fallback": "solar:sticker-smile-circle-outline",
	});
}

export default Component;
