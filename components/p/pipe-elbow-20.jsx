import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k863ckb4g.css';
import '../../css/l/l5ybookek.css';
import '../../css/s/sqn_l5bdy.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k863ckb4g"/><path class="l5ybookek"/><path class="sqn_l5bdy"/>`,
		"fallback": "energy-icons:pipe-elbow-20",
	});
}

export default Component;
