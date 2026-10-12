import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qqu28rbuo.css';
import '../../css/k/kbmh56tfp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qqu28rbuo"/><path class="kbmh56tfp"/>`,
		"fallback": "lucide-extended:message-square-share-filled",
	});
}

export default Component;
