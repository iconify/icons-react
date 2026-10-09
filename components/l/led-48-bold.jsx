import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fsp_74b5t.css';
import '../../css/p/p95ug3i0a.css';
import '../../css/h/h0fjfvbhi.css';
import '../../css/m/mpsu6eb-c.css';
import '../../css/d/dze8s_bvr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fsp_74b5t"/><path class="p95ug3i0a"/><path class="h0fjfvbhi"/><path class="mpsu6eb-c"/><path class="dze8s_bvr"/>`,
		"fallback": "energy-icons:led-48-bold",
	});
}

export default Component;
