import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3lph30dl.css';
import '../../css/e/e10_y93bm.css';
import '../../css/o/owxmh-bon.css';
import '../../css/v/v6oej2b3p.css';
import '../../css/g/gnc1igdxe.css';
import '../../css/w/wentdhbnh.css';
import '../../css/u/uf7xz3bww.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3lph30dl"><path class="e10_y93bm"/><path class="owxmh-bon"/><path class="v6oej2b3p"/><path class="gnc1igdxe"/><path class="wentdhbnh"/><path class="uf7xz3bww"/></g>`,
		"fallback": "icon-park:tree-two",
	});
}

export default Component;
