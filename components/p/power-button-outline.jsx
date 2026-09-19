import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rtvndxeyx.css';
import '../../css/n/n8ie0gbut.css';
import '../../css/y/yxx4r0hjj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rtvndxeyx"/><path class="n8ie0gbut"/><path clip-rule="evenodd" class="yxx4r0hjj"/>`,
		"fallback": "basil:power-button-outline",
	});
}

export default Component;
