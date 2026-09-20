import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/corykn.css';
import '../../css/n/nhjobb.css';
import '../../css/s/so-from-70.css';
import '../../css/d/d-4c0-hc.css';
import '../../css/d/d-i58k3z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="corykn"/><path class="nhjobb"/>`,
		"fallback": "line-md:tablet",
	});
}

export default Component;
