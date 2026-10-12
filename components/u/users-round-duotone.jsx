import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n_fr2mbui.css';
import '../../css/s/sf7yaz6nn.css';
import '../../css/o/okalx_bvh.css';
import '../../css/y/y6908-b4g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="n_fr2mbui"/><path class="sf7yaz6nn"/><path class="okalx_bvh"/><path class="y6908-b4g"/></g>`,
		"fallback": "lucide-extended:users-round-duotone",
	});
}

export default Component;
