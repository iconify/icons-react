import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/a/a50lzmb_f.css';
import '../../css/q/q59kcg28y.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="a50lzmb_f"/><path class="q59kcg28y"/></g>`,
		"fallback": "streamline:lift",
	});
}

export default Component;
