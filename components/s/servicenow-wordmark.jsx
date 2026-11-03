import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3au-5bor.css';
import '../../css/a/avg_k22jv.css';
import '../../css/i/ic5amcb4z.css';
import '../../css/d/d2wq1dhwn.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l3au-5bor"/><path class="avg_k22jv"/><path class="ic5amcb4z"/><path class="d2wq1dhwn"/>`,
		"fallback": "devicon:servicenow-wordmark",
	});
}

export default Component;
