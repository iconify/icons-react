import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/h/h_tsn8bxt.css';
import '../../css/f/ffhoffbih.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><circle class="h_tsn8bxt"/><path class="ffhoffbih"/></g>`,
		"fallback": "hugeicons:live-streaming-02",
	});
}

export default Component;
