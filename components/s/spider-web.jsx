import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/o/oew13bbxd.css';
import '../../css/x/x53pk-bhg.css';
import '../../css/o/oxupixzhe.css';
import '../../css/f/fcplvcczx.css';
import '../../css/s/sigw5-b8p.css';
import '../../css/h/hvdivdizi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="oew13bbxd wm-shadow"/><path class="x53pk-bhg"/><path class="oxupixzhe"/><path class="fcplvcczx"/><path class="sigw5-b8p"/><path class="hvdivdizi"/></g>`,
		"fallback": "withicons-retro:spider-web",
	});
}

export default Component;
