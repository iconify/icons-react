import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vme83ob7i.css';
import '../../css/u/u79l9rnmq.css';
import '../../css/f/f3aqdccix.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vme83ob7i"/><path class="u79l9rnmq"/><path class="f3aqdccix"/></g>`,
		"fallback": "streamline-kameleon-color:soccer-field-pop",
	});
}

export default Component;
