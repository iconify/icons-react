import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/f/f29d-jc1h.css';
import '../../css/w/wzh6a6bgy.css';
import '../../css/t/tm_supbzi.css';
import '../../css/a/a714r4rwc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="f29d-jc1h"/><path class="wzh6a6bgy"/><path class="tm_supbzi"/><path class="a714r4rwc"/></g>`,
		"fallback": "streamline-plump-color:megaphone-refresh",
	});
}

export default Component;
