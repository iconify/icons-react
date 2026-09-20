import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bd-nkug3f.css';
import '../../css/c/cqcsowpco.css';
import '../../css/e/e2doa554v.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bd-nkug3f"/><path class="cqcsowpco"/><path class="e2doa554v"/>`,
		"fallback": "selfhst:registry-console-light",
	});
}

export default Component;
