import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/k/k8gjbsf_l.css';
import '../../css/g/g-o3-og7h.css';
import '../../css/v/vg5qdnbut.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="k8gjbsf_l"/><path class="g-o3-og7h"/><path class="vg5qdnbut"/></g>`,
		"fallback": "streamline-logos:pingchat-logo",
	});
}

export default Component;
