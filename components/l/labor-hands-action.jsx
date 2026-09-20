import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/s/sbp7-fiha.css';
import '../../css/k/kfq_4gvdz.css';
import '../../css/d/d2qfxh10l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="sbp7-fiha"/><path class="kfq_4gvdz"/><path class="d2qfxh10l"/></g>`,
		"fallback": "streamline-ultimate:labor-hands-action",
	});
}

export default Component;
