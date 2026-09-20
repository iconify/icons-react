import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kk-n8nb7r.css';
import '../../css/x/xizbhjbsb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kk-n8nb7r"/><path class="xizbhjbsb"/>`,
		"fallback": "selfhst:linkedin",
	});
}

export default Component;
