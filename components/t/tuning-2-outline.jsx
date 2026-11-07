import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y1ow07v6l.css';
import '../../css/k/kwth7wbyd.css';
import '../../css/x/xbe4268py.css';
import '../../css/z/z-d-djbsf.css';
import '../../css/b/b2-d1dbrp.css';
import '../../css/h/hhtadbbeh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="y1ow07v6l"/><path clip-rule="evenodd" class="kwth7wbyd"/><path class="xbe4268py"/><path class="z-d-djbsf"/><path class="b2-d1dbrp"/><path class="hhtadbbeh"/>`,
		"fallback": "solar:tuning-2-outline",
	});
}

export default Component;
