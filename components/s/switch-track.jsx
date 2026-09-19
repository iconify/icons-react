import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/n/nhtrywblz.css';
import '../../css/a/a4mia7bvg.css';
import '../../css/n/nv5rkmb7z.css';
import '../../css/w/wy-4qo40w.css';
import '../../css/j/ji_-v7hcn.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="nhtrywblz"/><path class="a4mia7bvg"/><path class="nv5rkmb7z"/><path class="wy-4qo40w"/><path class="ji_-v7hcn"/></g>`,
		"fallback": "icon-park:switch-track",
	});
}

export default Component;
