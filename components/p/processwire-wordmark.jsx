import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/emlqstweo.css';
import '../../css/s/s-p22fb2s.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="emlqstweo"/><path class="s-p22fb2s"/>`,
		"fallback": "devicon:processwire-wordmark",
	});
}

export default Component;
