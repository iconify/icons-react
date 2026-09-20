import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lp8ths2ru.css';
import '../../css/s/sh2c4zurj.css';
import '../../css/m/mr-8bjj0a.css';
import '../../css/d/dk4d-tw4m.css';
import '../../css/y/yu34cgbqm.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="lp8ths2ru"/><path clip-rule="evenodd" class="sh2c4zurj"/><path class="mr-8bjj0a"/><path class="dk4d-tw4m"/><path class="yu34cgbqm"/></g>`,
		"fallback": "streamline-color:speaker-2",
	});
}

export default Component;
