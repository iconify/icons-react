import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/l/lw2g2bb3f.css';
import '../../css/s/skqzgzjwd.css';
import '../../css/p/pjqa07bbp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="lw2g2bb3f"/><path class="skqzgzjwd wm-a"/><path class="pjqa07bbp"/></g>`,
		"fallback": "withicons:toggle-duo",
	});
}

export default Component;
