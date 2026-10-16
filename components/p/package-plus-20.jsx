import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rtjw67ppi.css';
import '../../css/m/m-ue7vdss.css';
import '../../css/m/mc34kf5uc.css';
import '../../css/k/k_yg_y1rk.css';
import '../../css/a/aqj0--bjv.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rtjw67ppi"/><path class="m-ue7vdss"/><path class="mc34kf5uc"/><path class="k_yg_y1rk"/><path class="aqj0--bjv"/>`,
		"fallback": "energy-icons:package-plus-20",
	});
}

export default Component;
