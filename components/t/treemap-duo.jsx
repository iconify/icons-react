import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eirgzobiv.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/m/mie31z6an.css';
import '../../css/x/xvr7q8bai.css';
import '../../css/x/xgkpmbcio.css';
import '../../css/b/bvqojtbxw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eirgzobiv secondary"/><g class="dt0cm9dhy primary"><path class="mie31z6an"/><path class="xvr7q8bai"/><path class="xgkpmbcio"/><path class="bvqojtbxw"/></g>`,
		"fallback": "iconaut:treemap-duo",
	});
}

export default Component;
