import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/z/zbvlf5bbv.css';
import '../../css/t/tkzmiab1u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="zbvlf5bbv"/><path class="tkzmiab1u"/></g>`,
		"fallback": "streamline-sharp:screen-tv",
	});
}

export default Component;
