import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zcsewxa-q.css';
import '../../css/t/t6ojfgbzo.css';
import '../../css/z/zj67j_bqo.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zcsewxa-q"/><path class="t6ojfgbzo"/><path class="zj67j_bqo"/>`,
		"fallback": "selfhst:nyt-mini-crossword",
	});
}

export default Component;
