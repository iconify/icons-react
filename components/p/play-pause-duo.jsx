import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v74tltshr.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/f/fpvc0x2ta.css';
import '../../css/a/a-qyfacks.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="secondary v74tltshr"/><g class="dt0cm9dhy primary"><path class="fpvc0x2ta"/><path class="a-qyfacks"/></g>`,
		"fallback": "iconaut:play-pause-duo",
	});
}

export default Component;
