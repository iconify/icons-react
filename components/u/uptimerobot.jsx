import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a5lz9no8r.css';
import '../../css/b/b5b9_cc2c.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="a5lz9no8r"/><circle class="b5b9_cc2c"/>`,
		"fallback": "selfhst:uptimerobot",
	});
}

export default Component;
