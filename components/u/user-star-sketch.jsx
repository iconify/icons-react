import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/t/tlhbmhath.css';
import '../../css/o/oh_bc-b9h.css';
import '../../css/p/phgew-92f.css';
import '../../css/b/b4mz9pbbf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="tlhbmhath"/><path class="oh_bc-b9h wm-k"/><path class="phgew-92f wm-k"/><path class="b4mz9pbbf wm-s"/></g>`,
		"fallback": "withicons:user-star-sketch",
	});
}

export default Component;
