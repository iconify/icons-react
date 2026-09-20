import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/v/veyfi0f5y.css';
import '../../css/p/pg768cbpj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="veyfi0f5y"/><path class="pg768cbpj"/></g>`,
		"fallback": "streamline-ultimate:kitchenware-spatula-1",
	});
}

export default Component;
