import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fsvgi0bxr.css';
import '../../css/e/eojx8bb3q.css';
import '../../css/z/zxkqjubrb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="fsvgi0bxr"/><path class="eojx8bb3q"/><path clip-rule="evenodd" class="zxkqjubrb"/></g>`,
		"fallback": "reicon:turntable-note-filled",
	});
}

export default Component;
