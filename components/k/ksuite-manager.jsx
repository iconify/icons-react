import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k46bqabvm.css';
import '../../css/i/iqzoboglm.css';
import '../../css/t/tvdh9jgjx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k46bqabvm"/><path class="iqzoboglm"/><path class="tvdh9jgjx"/>`,
		"fallback": "selfhst:ksuite-manager",
	});
}

export default Component;
