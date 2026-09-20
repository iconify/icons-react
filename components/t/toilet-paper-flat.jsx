import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g8k2-xb4m.css';
import '../../css/w/wqletsbzk.css';
import '../../css/t/tppnmxaww.css';
import '../../css/o/odiecqdis.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="g8k2-xb4m"/><path class="wqletsbzk"/><path clip-rule="evenodd" class="tppnmxaww"/><path clip-rule="evenodd" class="odiecqdis"/></g>`,
		"fallback": "streamline-sharp-color:toilet-paper-flat",
	});
}

export default Component;
