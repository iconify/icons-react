import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jpj6bjbvs.css';
import '../../css/q/qho3_abub.css';
import '../../css/d/dyb1gzb0x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jpj6bjbvs"/><path class="qho3_abub"/><path class="dyb1gzb0x"/>`,
		"fallback": "token:paxg",
	});
}

export default Component;
