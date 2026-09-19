import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hrmf1gb-i.css';
import '../../css/s/sf1cmcczv.css';
import '../../css/q/q0i1j3b0k.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hrmf1gb-i"/><path class="sf1cmcczv"/><path class="q0i1j3b0k"/>`,
		"fallback": "carbon:subflow",
	});
}

export default Component;
