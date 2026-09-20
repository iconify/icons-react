import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/snkz4rbli.css';
import '../../css/g/g2h2xvbax.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="snkz4rbli"/><path class="g2h2xvbax"/></g>`,
		"fallback": "tdesign:logo-qq",
	});
}

export default Component;
