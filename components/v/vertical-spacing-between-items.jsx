import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vm3ivccum.css';
import '../../css/h/he167ib7f.css';
import '../../css/b/b4fyyhb5k.css';
import '../../css/k/k5se72bvb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="vm3ivccum"><path class="he167ib7f"/><path class="b4fyyhb5k"/><path class="k5se72bvb"/></g>`,
		"fallback": "icon-park-outline:vertical-spacing-between-items",
	});
}

export default Component;
