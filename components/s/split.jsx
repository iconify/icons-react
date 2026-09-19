import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/v/v9jvlqb3d.css';
import '../../css/d/dhq_7rj8f.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="v9jvlqb3d"/><rect class="dhq_7rj8f"/></g>`,
		"fallback": "icon-park-solid:split",
	});
}

export default Component;
