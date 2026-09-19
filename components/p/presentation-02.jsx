import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/q/q0nlyobyz.css';
import '../../css/e/e4xck0bwa.css';
import '../../css/i/ialavsbqy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="q0nlyobyz"/><path class="e4xck0bwa"/><path class="ialavsbqy"/></g>`,
		"fallback": "hugeicons:presentation-02",
	});
}

export default Component;
