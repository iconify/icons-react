import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/l/lw129pbfl.css';
import '../../css/c/cdziidc5o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="lw129pbfl"/><path class="cdziidc5o"/></g>`,
		"fallback": "streamline-ultimate:safety-flame-right",
	});
}

export default Component;
