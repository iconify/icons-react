import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/wp_oa-ofk.css';
import '../../css/s/swsab_86e.css';
import '../../css/n/npzbi206w.css';
import '../../css/v/v9vljob2t.css';
import '../../css/q/q6v1kxb4c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="wp_oa-ofk"/><circle class="swsab_86e"/><circle class="npzbi206w"/><circle class="v9vljob2t"/><circle class="q6v1kxb4c"/></g>`,
		"fallback": "lucide:waypoints",
	});
}

export default Component;
