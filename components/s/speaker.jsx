import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/h/h-6_tyerc.css';
import '../../css/d/dszt59b8o.css';
import '../../css/g/gxlsu37_r.css';
import '../../css/t/tjoozvtpj.css';
import '../../css/p/px_fc8box.css';
import '../../css/o/o7c_g2bxu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="h-6_tyerc wm-shadow"/><path class="dszt59b8o"/><path class="gxlsu37_r"/><path class="tjoozvtpj"/><path class="px_fc8box"/><path class="o7c_g2bxu"/></g>`,
		"fallback": "withicons-retro:speaker",
	});
}

export default Component;
