import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/f/fll0uqb6i.css';
import '../../css/l/ld1xfebwb.css';
import '../../css/n/na8v-abui.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="fll0uqb6i"/><path class="ld1xfebwb"/><path class="na8v-abui"/></g>`,
		"fallback": "streamline-ultimate:laptop-warning",
	});
}

export default Component;
