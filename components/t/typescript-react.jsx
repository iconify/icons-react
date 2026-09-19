import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xp7upebym.css';
import '../../css/v/vvk1tubfj.css';
import '../../css/t/t5cwsnblw.css';
import '../../css/p/phozzsbqz.css';
import '../../css/v/vvs-l70_n.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xp7upebym"><path class="vvk1tubfj"/><path class="t5cwsnblw"/><path class="phozzsbqz"/><path class="vvs-l70_n"/></g>`,
		"fallback": "catppuccin:typescript-react",
	});
}

export default Component;
