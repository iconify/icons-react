import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/ggc5c-1wb.css';
import '../../css/r/r8yn8f2in.css';
import '../../css/f/f3ty-rbba.css';
import '../../css/o/op6ocib8n.css';
import '../../css/v/v_j9eebmd.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ggc5c-1wb"/><path class="r8yn8f2in"/><path class="f3ty-rbba"/><path class="op6ocib8n"/><path class="v_j9eebmd"/></g>`,
		"fallback": "icon-park:soccer-one",
	});
}

export default Component;
