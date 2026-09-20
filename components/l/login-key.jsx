import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/c/cufri2bhg.css';
import '../../css/x/xos2nm-7i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="cufri2bhg"/><path class="xos2nm-7i"/></g>`,
		"fallback": "streamline-ultimate:login-key",
	});
}

export default Component;
