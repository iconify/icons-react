import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/ofgarebcg.css';
import '../../css/b/b7yzzhb5p.css';
import '../../css/j/ja1_1-bwv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ofgarebcg"/><path class="b7yzzhb5p"/><path class="ja1_1-bwv"/></g>`,
		"fallback": "streamline-plump-color:stopwatch-half-flat",
	});
}

export default Component;
