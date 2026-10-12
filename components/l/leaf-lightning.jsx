import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x38ho_bxm.css';
import '../../css/q/qwa3owbzy.css';
import '../../css/u/uxd2kscsw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="x38ho_bxm"/><path class="qwa3owbzy"/><path class="uxd2kscsw"/></g>`,
		"fallback": "andrsrxn:leaf-lightning",
	});
}

export default Component;
