import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e2ll1nb8o.css';
import '../../css/z/zl7g3rzgo.css';
import '../../css/b/bi4oaoona.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e2ll1nb8o"/><path class="zl7g3rzgo"/><path class="bi4oaoona"/>`,
		"fallback": "energy-icons:warehouse-20-bold",
	});
}

export default Component;
