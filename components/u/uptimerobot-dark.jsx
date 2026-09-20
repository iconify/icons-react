import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jwoiuu93g.css';
import '../../css/u/uhazafbmy.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="jwoiuu93g"/><circle class="uhazafbmy"/>`,
		"fallback": "selfhst:uptimerobot-dark",
	});
}

export default Component;
