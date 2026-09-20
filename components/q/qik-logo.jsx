import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/j/ja8_zg6om.css';
import '../../css/a/aiwa67byf.css';
import '../../css/m/mie-ygbyj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="ja8_zg6om"/><path class="aiwa67byf"/><path class="mie-ygbyj"/></g>`,
		"fallback": "streamline-logos:qik-logo",
	});
}

export default Component;
