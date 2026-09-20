import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/b/bcb_88bva.css';
import '../../css/a/abaan8b5m.css';
import '../../css/z/zy9i52v_r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="bcb_88bva"/><path class="abaan8b5m"/><path class="zy9i52v_r"/></g>`,
		"fallback": "solar:user-heart-outline",
	});
}

export default Component;
