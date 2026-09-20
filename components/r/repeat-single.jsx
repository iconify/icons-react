import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xkyxzwb9q.css';
import '../../css/d/d2hx6zd8z.css';
import '../../css/w/wp5tlqhlu.css';
import '../../css/r/rngum0m3z.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xkyxzwb9q"><path class="d2hx6zd8z"/><path class="wp5tlqhlu"/><path class="rngum0m3z"/></g>`,
		"fallback": "streamline-flex-color:repeat-single",
	});
}

export default Component;
