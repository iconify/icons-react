import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lpbhjmgis.css';
import '../../css/j/jtsx2huvg.css';
import '../../css/o/ois6x1tgx.css';
import '../../css/q/q5uscyb1x.css';
import '../../css/h/h69zhu5wf.css';
import '../../css/s/sb9ysqmzb.css';

const viewBox = {"width":400,"height":400};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="lpbhjmgis"/><path clip-rule="evenodd" class="jtsx2huvg"/><path class="ois6x1tgx"/><path class="q5uscyb1x"/><path class="h69zhu5wf"/><path class="sb9ysqmzb"/></g>`,
		"fallback": "thesvg-color:vuetify",
	});
}

export default Component;
