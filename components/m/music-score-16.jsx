import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lk75zkjgm.css';
import '../../css/s/so77q_bes.css';
import '../../css/y/ylah79bhu.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="lk75zkjgm"/><path clip-rule="evenodd" class="so77q_bes"/><path class="ylah79bhu"/>`,
		"fallback": "qlementine-icons:music-score-16",
	});
}

export default Component;
