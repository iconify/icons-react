import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tzj6chbuh.css';
import '../../css/r/rjv6740ri.css';
import '../../css/h/h6o3uyb1z.css';
import '../../css/k/kqzeh81us.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tzj6chbuh"/><path class="rjv6740ri"/><path class="h6o3uyb1z"/><path class="kqzeh81us"/>`,
		"fallback": "energy-icons:recycle-48",
	});
}

export default Component;
