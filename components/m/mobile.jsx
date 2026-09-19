import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hf35dlb5y.css';
import '../../css/s/s_l845bvk.css';
import '../../css/b/b98f61baq.css';
import '../../css/t/t_fn09dzp.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="hf35dlb5y"/><path class="s_l845bvk"/><circle class="b98f61baq"/><circle class="t_fn09dzp"/></g>`,
		"fallback": "et:mobile",
	});
}

export default Component;
