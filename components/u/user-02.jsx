import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/t/tcwe4ewrv.css';
import '../../css/s/sd36guj0z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><circle class="tcwe4ewrv"/><path class="sd36guj0z"/></g>`,
		"fallback": "hugeicons:user-02",
	});
}

export default Component;
