import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/v/v03jynzrb.css';
import '../../css/t/tie_amhlk.css';
import '../../css/e/emha3wbqe.css';
import '../../css/p/p65k-7b9s.css';
import '../../css/b/blawizb7e.css';
import '../../css/e/evjjbybyb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="v03jynzrb"/><path class="tie_amhlk wm-shine"/><path class="emha3wbqe wm-k"/><path class="p65k-7b9s wm-s"/><path class="blawizb7e"/><path class="evjjbybyb"/></g>`,
		"fallback": "withicons-kawaii:user-x",
	});
}

export default Component;
