import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nmibc4bxr.css';
import '../../css/v/vqgbtpbrj.css';
import '../../css/m/mwxbcf9yt.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nmibc4bxr"/><path class="vqgbtpbrj"/><path class="mwxbcf9yt"/>`,
		"fallback": "tabler-flags:israel",
	});
}

export default Component;
