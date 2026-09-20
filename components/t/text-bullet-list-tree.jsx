import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/aoexxpy5g.css';
import '../../css/l/l_kvvrcsk.css';
import '../../css/p/p3hadrdis.css';
import '../../css/f/f-9on35bf.css';
import '../../css/u/umjjezbyr.css';
import '../../css/b/bcecr5beb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="aoexxpy5g"/><path class="l_kvvrcsk"/><circle class="p3hadrdis"/><path class="f-9on35bf"/><circle class="umjjezbyr"/><path class="bcecr5beb"/></g>`,
		"fallback": "proicons:text-bullet-list-tree",
	});
}

export default Component;
