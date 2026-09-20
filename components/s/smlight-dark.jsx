import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q4pkyxbyo.css';
import '../../css/j/j34xgl0mc.css';
import '../../css/h/hti6_g1vm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="q4pkyxbyo"/><circle class="j34xgl0mc"/><circle class="hti6_g1vm"/>`,
		"fallback": "selfhst:smlight-dark",
	});
}

export default Component;
