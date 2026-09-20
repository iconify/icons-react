import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/b/bzs2wqgnu.css';
import '../../css/s/sfb2l6beq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="bzs2wqgnu"/><path class="sfb2l6beq"/></g>`,
		"fallback": "streamline-ultimate:tea-pot",
	});
}

export default Component;
