import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/h/hrsklvb_e.css';
import '../../css/a/acgeldc-e.css';
import '../../css/b/bmcgo5b3e.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="hrsklvb_e"/><path class="acgeldc-e"/><path class="bmcgo5b3e"/></g>`,
		"fallback": "charm:monitor-arrow",
	});
}

export default Component;
