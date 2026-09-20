import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f_-2gnldk.css';
import '../../css/a/apr74j14w.css';
import '../../css/y/yh718lb0i.css';
import '../../css/z/zddop2b3l.css';
import '../../css/n/nndumi9fj.css';
import '../../css/p/p52_gybvb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="f_-2gnldk"/><path class="apr74j14w"/><rect class="yh718lb0i"/><rect class="zddop2b3l"/><rect class="nndumi9fj"/><rect class="p52_gybvb"/></g>`,
		"fallback": "lets-icons:order-duotone",
	});
}

export default Component;
