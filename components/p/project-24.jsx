import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ush94023r.css';
import '../../css/l/lb-bssbki.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ush94023r"/><path class="lb-bssbki"/>`,
		"fallback": "octicon:project-24",
	});
}

export default Component;
