import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mklld0len.css';
import '../../css/m/moxc6eb7g.css';
import '../../css/p/p23z6zb8r.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mklld0len"/><path clip-rule="evenodd" class="moxc6eb7g"/><path class="p23z6zb8r"/></g>`,
		"fallback": "streamline-plump-color:treasure-chest-flat",
	});
}

export default Component;
