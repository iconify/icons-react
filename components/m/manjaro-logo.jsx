import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/v/vb0u9xetu.css';
import '../../css/n/njl14_b_c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="vb0u9xetu"/><path class="njl14_b_c"/></g>`,
		"fallback": "streamline-logos:manjaro-logo",
	});
}

export default Component;
