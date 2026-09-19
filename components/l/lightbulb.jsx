import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/u/unfvm0bdk.css';
import '../../css/a/abq_pbz6w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="unfvm0bdk"/><path class="abq_pbz6w"/></g>`,
		"fallback": "hugeicons:lightbulb",
	});
}

export default Component;
