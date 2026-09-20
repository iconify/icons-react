import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/v/vzyn7vbti.css';
import '../../css/a/adiyw3bmg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="vzyn7vbti"/><path class="adiyw3bmg"/></g>`,
		"fallback": "streamline-ultimate:notes-upload",
	});
}

export default Component;
