import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/p/piisj4nte.css';
import '../../css/n/nnrk7wb5p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="piisj4nte"/><path class="nnrk7wb5p"/></g>`,
		"fallback": "reicon:maximize4",
	});
}

export default Component;
