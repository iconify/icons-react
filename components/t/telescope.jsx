import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mt8euk94d.css';
import '../../css/m/m3ld84doc.css';
import '../../css/d/dcwrwbboq.css';
import '../../css/h/hrrl0svrj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mt8euk94d wm-a"/><path class="m3ld84doc wm-k"/><path class="dcwrwbboq wm-k"/><path class="hrrl0svrj wm-k"/>`,
		"fallback": "withicons-bauhaus:telescope",
	});
}

export default Component;
