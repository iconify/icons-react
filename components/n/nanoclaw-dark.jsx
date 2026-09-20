import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/elfgzfcxk.css';
import '../../css/o/o2cqz1o0l.css';
import '../../css/o/oxwb1e3yh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="elfgzfcxk"/><path class="o2cqz1o0l"/><path class="oxwb1e3yh"/>`,
		"fallback": "selfhst:nanoclaw-dark",
	});
}

export default Component;
