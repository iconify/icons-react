import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u6hs9ongt.css';
import '../../css/v/vj13mgbku.css';
import '../../css/n/nms6vjb0u.css';
import '../../css/k/ky84c4vcl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u6hs9ongt wm-k"/><path class="vj13mgbku wm-a"/><path class="nms6vjb0u wm-a"/><path class="ky84c4vcl wm-a"/>`,
		"fallback": "withicons-bauhaus:palette",
	});
}

export default Component;
