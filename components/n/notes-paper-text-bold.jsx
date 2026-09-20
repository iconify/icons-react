import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uzcmoifqe.css';
import '../../css/n/nupkm7b4r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uzcmoifqe"/><path class="nupkm7b4r"/>`,
		"fallback": "streamline-ultimate:notes-paper-text-bold",
	});
}

export default Component;
