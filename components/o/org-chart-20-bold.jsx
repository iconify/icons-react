import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qclimqb5u.css';
import '../../css/a/amrwb6zhd.css';
import '../../css/q/qy-1mwbkm.css';
import '../../css/x/xk-igwbmu.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qclimqb5u"/><path class="amrwb6zhd"/><path class="qy-1mwbkm"/><path class="xk-igwbmu"/>`,
		"fallback": "energy-icons:org-chart-20-bold",
	});
}

export default Component;
