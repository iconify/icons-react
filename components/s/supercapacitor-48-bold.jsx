import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e1e2bd8kv.css';
import '../../css/w/we_pq2bjv.css';
import '../../css/z/z582fmbiy.css';
import '../../css/x/xmyv43b7m.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e1e2bd8kv"/><path class="we_pq2bjv"/><path class="z582fmbiy"/><path class="xmyv43b7m"/>`,
		"fallback": "energy-icons:supercapacitor-48-bold",
	});
}

export default Component;
