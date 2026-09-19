import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y5mhyjbwd.css';
import '../../css/t/tq10f7bbh.css';
import '../../css/h/h-e9_jbqo.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y5mhyjbwd"/><path class="tq10f7bbh"/><path class="h-e9_jbqo"/>`,
		"fallback": "famicons:logo-famibot",
	});
}

export default Component;
