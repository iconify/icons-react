import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/b/bopi9b9jn.css';
import '../../css/h/h_tsn8bxt.css';
import '../../css/f/fxwnb7vgp.css';
import '../../css/e/ewng3_bdb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><circle class="bopi9b9jn"/><circle class="h_tsn8bxt"/><circle class="fxwnb7vgp"/><path class="ewng3_bdb"/></g>`,
		"fallback": "hugeicons:waypoints",
	});
}

export default Component;
