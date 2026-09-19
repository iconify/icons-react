import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/d/drc0ytbts.css';
import '../../css/r/rc1jhvaam.css';
import '../../css/i/i3vo1qb3e.css';
import '../../css/r/r9imp5bbq.css';
import '../../css/q/q65w8gblw.css';
import '../../css/d/dxgqlbbla.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ufeehvblu"><path class="drc0ytbts"/><path class="rc1jhvaam"/><path class="i3vo1qb3e"/><path class="r9imp5bbq"/><path class="q65w8gblw"/><path class="dxgqlbbla"/></g>`,
		"fallback": "icon-park:notebook-one",
	});
}

export default Component;
