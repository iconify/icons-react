import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jffi-4zru.css';
import '../../css/a/aw8-pbcnm.css';
import '../../css/e/eqfrj73ru.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="jffi-4zru"/><path clip-rule="evenodd" class="aw8-pbcnm"/><path class="eqfrj73ru"/></g>`,
		"fallback": "streamline-flex-color:school-bus-side-flat",
	});
}

export default Component;
