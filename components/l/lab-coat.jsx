import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/psm80-kqo.css';
import '../../css/n/n7b67oyvb.css';
import '../../css/j/jal-6qjel.css';
import '../../css/s/s9pxr-_8m.css';
import '../../css/v/vjfurtbcs.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="psm80-kqo"/><path class="n7b67oyvb"/><path class="jal-6qjel"/><path class="s9pxr-_8m"/><path class="vjfurtbcs"/></g>`,
		"fallback": "fluent-emoji-flat:lab-coat",
	});
}

export default Component;
