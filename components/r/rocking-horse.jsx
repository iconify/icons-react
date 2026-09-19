import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/w/wraz8bb6y.css';
import '../../css/g/gnawheb3g.css';
import '../../css/u/un26xhoct.css';
import '../../css/i/i95-9mb7t.css';
import '../../css/b/bn8w5ccww.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="wraz8bb6y"/><path class="gnawheb3g"/><path class="un26xhoct"/><path class="i95-9mb7t"/><path class="bn8w5ccww"/></g>`,
		"fallback": "icon-park:rocking-horse",
	});
}

export default Component;
