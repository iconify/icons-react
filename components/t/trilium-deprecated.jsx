import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tiswrynqd.css';
import '../../css/m/mnxwnsb-q.css';
import '../../css/r/rce-0p68g.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tiswrynqd"/><path class="mnxwnsb-q"/><path class="rce-0p68g"/>`,
		"fallback": "selfhst:trilium-deprecated",
	});
}

export default Component;
