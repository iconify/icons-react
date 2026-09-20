import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p1c38rxqq.css';
import '../../css/n/nl-q95bit.css';
import '../../css/p/p9hlq3xpn.css';
import '../../css/a/atujfizel.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p1c38rxqq"/><circle class="nl-q95bit"/><circle class="p9hlq3xpn"/><circle class="atujfizel"/>`,
		"fallback": "uim:list-ui-alt",
	});
}

export default Component;
