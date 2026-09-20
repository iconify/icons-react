import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mj0an3bgo.css';
import '../../css/m/mjrq3v7lt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mj0an3bgo"/><path class="mjrq3v7lt"/>`,
		"fallback": "streamline-freehand:music-note-1",
	});
}

export default Component;
