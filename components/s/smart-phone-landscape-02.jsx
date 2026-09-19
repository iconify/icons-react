import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/b/bztwgo5oc.css';
import '../../css/n/n21ra0ylq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="bztwgo5oc"/><path class="n21ra0ylq"/></g>`,
		"fallback": "hugeicons:smart-phone-landscape-02",
	});
}

export default Component;
