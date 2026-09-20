import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/etji4rahb.css';
import '../../css/r/ru21yg98i.css';
import '../../css/j/j7rfvrv2c.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="etji4rahb"/><path class="ru21yg98i"/><path class="j7rfvrv2c"/></g>`,
		"fallback": "skill-icons:openshift",
	});
}

export default Component;
