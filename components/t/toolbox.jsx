import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/m/m1xw3cctw.css';
import '../../css/u/uml5kp9ow.css';
import '../../css/k/kpgvotblb.css';
import '../../css/v/v6yzk-b5c.css';
import '../../css/v/v3bzhxbbh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="m1xw3cctw"/><path class="uml5kp9ow wm-shine"/><path class="kpgvotblb wm-k"/><path class="v6yzk-b5c wm-a"/><path class="v3bzhxbbh wm-deco"/></g>`,
		"fallback": "withicons-kawaii:toolbox",
	});
}

export default Component;
