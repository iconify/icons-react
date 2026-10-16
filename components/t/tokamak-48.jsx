import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/as2_m7byb.css';
import '../../css/f/fe3vb5b8y.css';
import '../../css/j/j6ppqza5o.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="as2_m7byb"/><path class="fe3vb5b8y"/><path class="j6ppqza5o"/>`,
		"fallback": "energy-icons:tokamak-48",
	});
}

export default Component;
