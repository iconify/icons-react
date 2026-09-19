import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/i/igh-6877r.css';
import '../../css/g/g48w89bvm.css';
import '../../css/h/hnlb0b7xy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="igh-6877r"/><path class="g48w89bvm"/><path class="hnlb0b7xy"/></g>`,
		"fallback": "hugeicons:money-send-01",
	});
}

export default Component;
