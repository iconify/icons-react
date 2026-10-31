import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ukv6olbwm.css';
import '../../css/f/fnblp6ymy.css';
import '../../css/j/jcc8b939g.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ukv6olbwm"/><path class="fnblp6ymy"/><path class="jcc8b939g"/>`,
		"fallback": "tabler-flags:tatarstan",
	});
}

export default Component;
