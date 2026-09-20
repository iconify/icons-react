import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cl35mubuy.css';
import '../../css/w/wfpw4achp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cl35mubuy"/><path class="wfpw4achp"/>`,
		"fallback": "selfhst:streamystats-light",
	});
}

export default Component;
