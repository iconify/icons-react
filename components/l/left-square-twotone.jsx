import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gc8-4tb2b.css';
import '../../css/l/l-_1mtbvg.css';
import '../../css/q/q2-__fzdc.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gc8-4tb2b"/><path class="l-_1mtbvg"/><path class="q2-__fzdc"/>`,
		"fallback": "ant-design:left-square-twotone",
	});
}

export default Component;
