import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/g150lp0jx.css';
import '../../css/o/o4qv1pbyw.css';
import '../../css/q/q-i_u5_qs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="g150lp0jx"/><path class="o4qv1pbyw"/><path class="q-i_u5_qs"/></g>`,
		"fallback": "lucide:venetian-mask",
	});
}

export default Component;
