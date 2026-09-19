import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/t/ti4-m668c.css';
import '../../css/t/tx91pulpy.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ti4-m668c"/><path class="tx91pulpy"/></g>`,
		"fallback": "charm:swords",
	});
}

export default Component;
