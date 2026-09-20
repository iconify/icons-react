import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i21b6im-e.css';
import '../../css/c/ci5n4gb-o.css';
import '../../css/p/pl7c8r-zm.css';
import '../../css/z/zf57u6bez.css';
import '../../css/q/q_b7ivbza.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="i21b6im-e"/><circle class="ci5n4gb-o"/><circle class="pl7c8r-zm"/><path class="zf57u6bez"/><path class="q_b7ivbza"/>`,
		"fallback": "selfhst:transfer-zip",
	});
}

export default Component;
