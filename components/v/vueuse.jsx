import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bg17mhb7c.css';
import '../../css/q/qyzx5zbrf.css';

const viewBox = {"width":256,"height":277};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bg17mhb7c"/><path class="qyzx5zbrf"/>`,
		"fallback": "thesvg-color:vueuse",
	});
}

export default Component;
