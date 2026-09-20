import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/g/gsbqg8kvb.css';
import '../../css/f/fc2f-fb1l.css';
import '../../css/f/fn77k9bkx.css';
import '../../css/o/ou05uac1c.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="gsbqg8kvb"/><path class="fc2f-fb1l"/><path class="fn77k9bkx"/><path class="ou05uac1c"/></g>`,
		"fallback": "streamline-plump-color:search-visual",
	});
}

export default Component;
