import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jibxwvd7m.css';
import '../../css/t/tt34imv5l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jibxwvd7m"/><path class="tt34imv5l"/></g>`,
		"fallback": "coolicons:sparkles-duotone-round",
	});
}

export default Component;
