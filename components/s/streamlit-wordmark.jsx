import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q7q0ht_hy.css';
import '../../css/d/dvn4mnkrs.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q7q0ht_hy"/><path class="dvn4mnkrs"/>`,
		"fallback": "devicon-plain:streamlit-wordmark",
	});
}

export default Component;
