import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/o/o5vbpf6wd.css';
import '../../css/f/fm7vl8brq.css';
import '../../css/m/m6z6jwini.css';
import '../../css/i/ii7el3b_p.css';
import '../../css/s/szfe2wj7e.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="o5vbpf6wd"/><path class="fm7vl8brq"/><path class="m6z6jwini"/><path class="ii7el3b_p"/><path class="szfe2wj7e"/></g>`,
		"fallback": "icon-park:text-style-one",
	});
}

export default Component;
