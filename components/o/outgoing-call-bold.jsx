import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b-2vogrtb.css';
import '../../css/v/vglfn4bnc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b-2vogrtb"/><path class="vglfn4bnc"/>`,
		"fallback": "solar:outgoing-call-bold",
	});
}

export default Component;
