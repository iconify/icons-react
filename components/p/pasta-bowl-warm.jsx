import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/p/py-mm7brh.css';
import '../../css/e/e97y91bpj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="py-mm7brh"/><path class="e97y91bpj"/></g>`,
		"fallback": "streamline-ultimate:pasta-bowl-warm",
	});
}

export default Component;
