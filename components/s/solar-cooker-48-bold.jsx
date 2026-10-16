import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yh0ffhb0t.css';
import '../../css/g/g0my9ebpq.css';
import '../../css/z/zsa4tjbhd.css';
import '../../css/k/k43jbz6ap.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yh0ffhb0t"/><path class="g0my9ebpq"/><path class="zsa4tjbhd"/><path class="k43jbz6ap"/>`,
		"fallback": "energy-icons:solar-cooker-48-bold",
	});
}

export default Component;
