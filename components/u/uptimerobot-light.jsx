import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sniv8rcns.css';
import '../../css/o/oss8yqu8p.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="sniv8rcns"/><circle class="oss8yqu8p"/>`,
		"fallback": "selfhst:uptimerobot-light",
	});
}

export default Component;
