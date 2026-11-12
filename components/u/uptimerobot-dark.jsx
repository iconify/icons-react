import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iuq0axb2c.css';
import '../../css/u/uhazafbmy.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="iuq0axb2c"/><circle class="uhazafbmy"/>`,
		"fallback": "selfhst:uptimerobot-dark",
	});
}

export default Component;
