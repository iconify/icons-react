import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pr52f_b5y.css';
import '../../css/x/xt9ylgxbv.css';
import '../../css/t/tnqrs3bck.css';
import '../../css/q/qtktxacxl.css';
import '../../css/s/sfy91pb3e.css';
import '../../css/h/hli2s3b5e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="pr52f_b5y"><path class="xt9ylgxbv"/><path class="tnqrs3bck"/><path class="qtktxacxl"/><path class="sfy91pb3e"/><path class="hli2s3b5e"/></g>`,
		"fallback": "solar:magic-stick-3-line-duotone",
	});
}

export default Component;
