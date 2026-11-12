import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cua72wbew.css';
import '../../css/h/hsd7tzbla.css';
import '../../css/k/kbi-vfbsy.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cua72wbew"/><path class="hsd7tzbla"/><path class="kbi-vfbsy"/>`,
		"fallback": "selfhst:qdrant-dark",
	});
}

export default Component;
