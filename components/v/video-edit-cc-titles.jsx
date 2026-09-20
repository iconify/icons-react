import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r8sjn35rg.css';
import '../../css/x/xs8efbche.css';
import '../../css/l/ln-ed7fbk.css';
import '../../css/f/fw87vybqy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="r8sjn35rg"/><path class="xs8efbche"/><path class="ln-ed7fbk"/><path class="fw87vybqy"/></g>`,
		"fallback": "streamline-ultimate-color:video-edit-cc-titles",
	});
}

export default Component;
