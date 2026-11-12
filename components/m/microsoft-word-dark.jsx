import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tv7yabcbh.css';
import '../../css/t/t13q_mb5z.css';
import '../../css/r/r9_5sob_i.css';
import '../../css/b/b7yq6dbnh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tv7yabcbh"/><path class="t13q_mb5z"/><path class="r9_5sob_i"/><path class="b7yq6dbnh"/>`,
		"fallback": "selfhst:microsoft-word-dark",
	});
}

export default Component;
