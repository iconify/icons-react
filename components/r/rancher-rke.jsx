import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l37npu1fk.css';
import '../../css/s/sp_sykbev.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l37npu1fk"/><path class="sp_sykbev"/>`,
		"fallback": "selfhst:rancher-rke",
	});
}

export default Component;
