import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e-sjs80hz.css';
import '../../css/y/yg4ntub0x.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e-sjs80hz"/><circle class="yg4ntub0x"/>`,
		"fallback": "selfhst:livinity-light",
	});
}

export default Component;
