import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/o/o3jx2hhdd.css';
import '../../css/r/rc46j6b0f.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="o3jx2hhdd"/><path class="rc46j6b0f"/></g>`,
		"fallback": "charm:phone-outgoing",
	});
}

export default Component;
