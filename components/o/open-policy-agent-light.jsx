import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e6-guxbgd.css';
import '../../css/i/i3cnczbuw.css';
import '../../css/i/ilpgmbc3k.css';
import '../../css/l/l0kxv-blq.css';

const viewBox = {"width":395.51,"height":435.76,"left":16.37,"top":-1.63};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e6-guxbgd"/><path class="i3cnczbuw"/><path class="ilpgmbc3k"/><path class="l0kxv-blq"/>`,
		"fallback": "thesvg-color:open-policy-agent-light",
	});
}

export default Component;
