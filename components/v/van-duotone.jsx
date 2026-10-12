import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gsr2r2a3d.css';
import '../../css/v/v59nqtkpi.css';
import '../../css/a/a67w5majz.css';
import '../../css/j/jct5gxc9y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="gsr2r2a3d"/><path class="v59nqtkpi"/><path class="a67w5majz"/><path class="jct5gxc9y"/></g>`,
		"fallback": "lucide-extended:van-duotone",
	});
}

export default Component;
