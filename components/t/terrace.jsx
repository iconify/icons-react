import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3lph30dl.css';
import '../../css/o/o6iy-4x2x.css';
import '../../css/g/gcmz-ur1o.css';
import '../../css/w/wq_x3acpe.css';
import '../../css/g/geadpubgo.css';
import '../../css/s/svahg3b-b.css';
import '../../css/e/eoo-ektpj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3lph30dl"><path class="o6iy-4x2x"/><path class="gcmz-ur1o"/><path class="wq_x3acpe"/><path class="geadpubgo"/><path class="svahg3b-b"/><path class="eoo-ektpj"/></g>`,
		"fallback": "icon-park:terrace",
	});
}

export default Component;
