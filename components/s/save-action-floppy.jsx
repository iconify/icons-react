import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/j/jszndebfn.css';
import '../../css/c/ce63_pesd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="jszndebfn"/><path class="ce63_pesd"/></g>`,
		"fallback": "iconoir:save-action-floppy",
	});
}

export default Component;
