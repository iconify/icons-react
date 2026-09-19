import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/ghyioabfx.css';
import '../../css/k/kpco3xb7r.css';
import '../../css/t/t8y--cb1d.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ghyioabfx"/><path clip-rule="evenodd" class="kpco3xb7r"/><path class="t8y--cb1d"/></g>`,
		"fallback": "icon-park-outline:people-minus-one",
	});
}

export default Component;
