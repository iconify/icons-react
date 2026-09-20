import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jqmyo7bga.css';
import '../../css/w/whv5eacro.css';
import '../../css/f/fluisfbnu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jqmyo7bga"/><path clip-rule="evenodd" class="whv5eacro"/><path clip-rule="evenodd" class="fluisfbnu"/></g>`,
		"fallback": "streamline-sharp-color:presentation-flat",
	});
}

export default Component;
