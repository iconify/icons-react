import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kt5aatsrh.css';
import '../../css/x/xsgq8ckwo.css';
import '../../css/f/fodrk9f3t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kt5aatsrh"/><path class="xsgq8ckwo"/><path class="fodrk9f3t"/>`,
		"fallback": "streamline-freehand:music-note-circle-block-1",
	});
}

export default Component;
