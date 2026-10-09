import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ilwycjmrk.css';
import '../../css/t/tlj013tdx.css';
import '../../css/i/i93cs7j8n.css';
import '../../css/h/h6wfktt5w.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ilwycjmrk"/><path class="tlj013tdx"/><path class="i93cs7j8n"/><path class="h6wfktt5w"/>`,
		"fallback": "energy-icons:solar-carport-48",
	});
}

export default Component;
