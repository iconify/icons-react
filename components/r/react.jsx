import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f5zt_gved.css';
import '../../css/z/z-s_b7rqn.css';
import '../../css/n/na80c_qqt.css';
import '../../css/h/hf8_b9b8d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f5zt_gved"/><path class="z-s_b7rqn"/><path class="na80c_qqt"/><path class="hf8_b9b8d"/>`,
		"fallback": "bxl:react",
	});
}

export default Component;
