import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/q/q3gx62m9b.css';
import '../../css/o/otrke9bsi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="q3gx62m9b"/><path class="otrke9bsi"/></g>`,
		"fallback": "streamline-sharp:toilet-paper",
	});
}

export default Component;
