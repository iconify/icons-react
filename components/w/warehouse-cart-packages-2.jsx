import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/l/lxc15igcy.css';
import '../../css/p/pial3gbkj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="lxc15igcy"/><path class="pial3gbkj"/></g>`,
		"fallback": "streamline-ultimate:warehouse-cart-packages-2",
	});
}

export default Component;
