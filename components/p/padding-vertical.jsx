import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xgkuemc4l.css';
import '../../css/f/fkk_uibve.css';
import '../../css/r/r1e1pvq4e.css';
import '../../css/s/s6yemywwb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="xgkuemc4l"/><path class="fkk_uibve"/><path clip-rule="evenodd" class="r1e1pvq4e"/><path class="s6yemywwb"/></g>`,
		"fallback": "andrsrxn:padding-vertical",
	});
}

export default Component;
