import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/a/a3x-2tp-l.css';
import '../../css/l/ljosjn_hp.css';
import '../../css/n/n3rgvqdzd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="a3x-2tp-l"/><path class="ljosjn_hp"/><path class="n3rgvqdzd"/></g>`,
		"fallback": "withicons-bauhaus:vr-headset",
	});
}

export default Component;
