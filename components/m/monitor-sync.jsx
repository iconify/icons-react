import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/r/rgou05s8k.css';
import '../../css/j/j6s68gugw.css';
import '../../css/c/c6t3c-ate.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="rgou05s8k"/><path class="j6s68gugw"/><path class="c6t3c-ate"/></g>`,
		"fallback": "streamline-ultimate:monitor-sync",
	});
}

export default Component;
