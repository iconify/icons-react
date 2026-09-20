import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jrbag7b_v.css';
import '../../css/n/nhphllbxb.css';
import '../../css/f/fyfohacvs.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jrbag7b_v"/><path class="nhphllbxb"/><path class="fyfohacvs"/>`,
		"fallback": "selfhst:linux",
	});
}

export default Component;
