import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/kcxthib1x.css';
import '../../css/j/jro3hvb0k.css';
import '../../css/l/lyew2g4yv.css';
import '../../css/p/p55ze_r2o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><rect class="kcxthib1x"/><path class="jro3hvb0k"/><rect class="lyew2g4yv"/><rect class="p55ze_r2o"/></g>`,
		"fallback": "lucide-lab:meal-box",
	});
}

export default Component;
