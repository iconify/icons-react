import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hxlt3zlpr.css';
import '../../css/l/l071l1pom.css';
import '../../css/x/xcu_9lp8n.css';
import '../../css/k/kc-rqe92h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hxlt3zlpr"/><path class="l071l1pom"/><path class="xcu_9lp8n"/><path class="kc-rqe92h"/>`,
		"fallback": "withicons-bauhaus:share",
	});
}

export default Component;
