import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xiq54obrr.css';
import '../../css/g/g0d1dnbiv.css';
import '../../css/t/t8y--cb1d.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xiq54obrr"/><path clip-rule="evenodd" class="g0d1dnbiv"/><path class="t8y--cb1d"/></g>`,
		"fallback": "icon-park-solid:people-minus-one",
	});
}

export default Component;
