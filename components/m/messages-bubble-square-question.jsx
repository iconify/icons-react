import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/df6ejwx-m.css';
import '../../css/k/kriaoacuy.css';
import '../../css/e/ehvievdim.css';
import '../../css/c/cexbz7-9l.css';
import '../../css/d/d_ejrd_3c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="df6ejwx-m"/><path class="kriaoacuy"/><path class="ehvievdim"/><path class="cexbz7-9l"/><path class="d_ejrd_3c"/></g>`,
		"fallback": "streamline-ultimate-color:messages-bubble-square-question",
	});
}

export default Component;
