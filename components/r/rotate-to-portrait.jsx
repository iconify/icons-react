import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a5jx2rb3f.css';
import '../../css/y/y2e1v-8ak.css';
import '../../css/n/n9az18p2h.css';
import '../../css/e/edj7wwb4r.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a5jx2rb3f"/><path class="y2e1v-8ak"/><path class="n9az18p2h"/><path class="edj7wwb4r"/>`,
		"fallback": "flat-color-icons:rotate-to-portrait",
	});
}

export default Component;
