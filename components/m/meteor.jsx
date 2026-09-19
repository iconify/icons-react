import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lsy7k0alc.css';
import '../../css/z/zt-51hcly.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lsy7k0alc"/><path class="zt-51hcly"/>`,
		"fallback": "boxicons:meteor",
	});
}

export default Component;
