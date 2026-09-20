import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xf6nudbzg.css';
import '../../css/f/frp2_fb2i.css';
import '../../css/e/e_5k39kyp.css';

const viewBox = {"width":74,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xf6nudbzg"/><path class="frp2_fb2i"/><path class="e_5k39kyp"/>`,
		"fallback": "octicon:logo-github-24",
	});
}

export default Component;
