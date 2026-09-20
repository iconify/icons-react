import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r057-4e-t.css';
import '../../css/w/we37umbxg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="r057-4e-t"/><path class="we37umbxg"/>`,
		"fallback": "selfhst:semaphore-ui",
	});
}

export default Component;
