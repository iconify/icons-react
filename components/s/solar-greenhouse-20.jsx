import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/czmnpfbuv.css';
import '../../css/v/vy9zp_bkd.css';
import '../../css/h/h1yn6ab_j.css';
import '../../css/n/n5omxc2qq.css';
import '../../css/m/mrtw_lq_f.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="czmnpfbuv"/><path class="vy9zp_bkd"/><path class="h1yn6ab_j"/><path class="n5omxc2qq"/><path class="mrtw_lq_f"/>`,
		"fallback": "energy-icons:solar-greenhouse-20",
	});
}

export default Component;
