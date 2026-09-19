import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vampogb5i.css';
import '../../css/u/ulwkycb9s.css';
import '../../css/p/pic-il9ab.css';
import '../../css/w/wjm02hb-p.css';
import '../../css/o/oh1ldeb6j.css';
import '../../css/e/ejpfm5j3s.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vampogb5i"/><path class="ulwkycb9s"/><path class="pic-il9ab"/><path class="wjm02hb-p"/><path class="oh1ldeb6j"/><path class="ejpfm5j3s"/></g>`,
		"fallback": "icon-park:target-one",
	});
}

export default Component;
