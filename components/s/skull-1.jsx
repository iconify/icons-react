import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/x/xl5gh8b9t.css';
import '../../css/t/tarmjbcbp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="xl5gh8b9t"/><path class="tarmjbcbp"/></g>`,
		"fallback": "streamline-ultimate:skull-1",
	});
}

export default Component;
