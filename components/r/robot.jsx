import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/x/xipzorq0a.css';
import '../../css/k/kg6ostb4n.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><rect class="xipzorq0a"/><path class="kg6ostb4n"/></g>`,
		"fallback": "charm:robot",
	});
}

export default Component;
