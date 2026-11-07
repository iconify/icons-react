import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vh_ofebqf.css';
import '../../css/b/ba3k8mbju.css';
import '../../css/w/wwxnslb6o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vh_ofebqf"/><path clip-rule="evenodd" class="ba3k8mbju"/><path class="wwxnslb6o"/>`,
		"fallback": "solar:watch-square-bold",
	});
}

export default Component;
