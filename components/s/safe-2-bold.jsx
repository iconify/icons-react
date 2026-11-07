import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jctn5cbgl.css';
import '../../css/u/u87ezyb8f.css';
import '../../css/b/bnvy-8cvd.css';
import '../../css/m/ms0ci5but.css';
import '../../css/d/dynz7dbej.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jctn5cbgl"/><path class="u87ezyb8f"/><path class="bnvy-8cvd"/><path clip-rule="evenodd" class="ms0ci5but"/><path clip-rule="evenodd" class="dynz7dbej"/>`,
		"fallback": "solar:safe-2-bold",
	});
}

export default Component;
