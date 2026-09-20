import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/af9rt6b7c.css';
import '../../css/h/heyvp3bvx.css';
import '../../css/q/qioeu_bwj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="af9rt6b7c"/><path class="heyvp3bvx"/><path class="qioeu_bwj"/>`,
		"fallback": "selfhst:wapy-dev",
	});
}

export default Component;
