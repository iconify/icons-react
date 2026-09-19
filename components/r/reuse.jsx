import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e2phbwb_n.css';
import '../../css/v/vr9twnwus.css';
import '../../css/b/b5oktobie.css';
import '../../css/j/jzr9gebuu.css';
import '../../css/p/pf0h8ij0t.css';
import '../../css/d/d_uu0e6lh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e2phbwb_n"/><circle class="vr9twnwus"/><path class="b5oktobie"/><path class="jzr9gebuu"/><path class="pf0h8ij0t"/><path class="d_uu0e6lh"/>`,
		"fallback": "flat-color-icons:reuse",
	});
}

export default Component;
