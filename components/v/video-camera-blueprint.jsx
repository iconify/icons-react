import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/i/i3aa71r2c.css';
import '../../css/i/i39gejnmb.css';
import '../../css/k/kg2irmbhn.css';
import '../../css/n/ngslmpbzu.css';
import '../../css/k/kj_-zqb7o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="i3aa71r2c wm-deco"/><path class="i39gejnmb wm-deco"/><path class="kg2irmbhn wm-k"/><path class="ngslmpbzu wm-a"/><path class="kj_-zqb7o wm-a"/></g>`,
		"fallback": "withicons:video-camera-blueprint",
	});
}

export default Component;
