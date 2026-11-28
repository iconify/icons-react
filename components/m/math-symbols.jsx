import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/a/a4e3nhyuj.css';
import '../../css/d/d5j2lgbbn.css';
import '../../css/e/eh9x2ebds.css';
import '../../css/d/d49oa4axd.css';
import '../../css/n/ne96oobnu.css';
import '../../css/z/zm59usbqe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="a4e3nhyuj"/><path class="d5j2lgbbn"/><path class="eh9x2ebds"/><path class="d49oa4axd"/><path class="ne96oobnu"/><path class="zm59usbqe"/></g>`,
		"fallback": "iconaut:math-symbols",
	});
}

export default Component;
