import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/v/vxy6qccrw.css';
import '../../css/p/phcqvyl7t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="vxy6qccrw"/><path class="phcqvyl7t"/></g>`,
		"fallback": "streamline-sharp:warehouse-1",
	});
}

export default Component;
