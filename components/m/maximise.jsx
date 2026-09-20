import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jtowsomii.css';
import '../../css/s/s-t8kdbfg.css';
import '../../css/j/j9ml2vbvl.css';
import '../../css/e/eelfzzviu.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jtowsomii"><path class="s-t8kdbfg"/><path class="j9ml2vbvl"/><path class="eelfzzviu"/></g>`,
		"fallback": "system-uicons:maximise",
	});
}

export default Component;
