import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/a/amsjq0xuj.css';
import '../../css/j/j62ormb7l.css';
import '../../css/o/oe63dbb3d.css';
import '../../css/j/j7hpscfgt.css';
import '../../css/b/b078eumno.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="amsjq0xuj"/><path class="j62ormb7l wm-shine"/><path class="oe63dbb3d wm-k"/><path class="j7hpscfgt wm-a"/><path class="b078eumno wm-deco"/></g>`,
		"fallback": "withicons-kawaii:mic-vocal",
	});
}

export default Component;
