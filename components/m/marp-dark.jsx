import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h-ttwubdw.css';
import '../../css/v/vxrrplwnx.css';
import '../../css/b/bwdyegfbl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h-ttwubdw"/><path class="vxrrplwnx"/><path class="bwdyegfbl"/>`,
		"fallback": "selfhst:marp-dark",
	});
}

export default Component;
