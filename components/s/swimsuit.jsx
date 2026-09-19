import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/h/h7tcblg-d.css';
import '../../css/i/in05zubxy.css';
import '../../css/o/ovsjx9qgy.css';
import '../../css/j/j3l3upm6m.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="h7tcblg-d"/><circle class="in05zubxy"/><circle class="ovsjx9qgy"/><path class="j3l3upm6m"/></g>`,
		"fallback": "icon-park-solid:swimsuit",
	});
}

export default Component;
