import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/aoz-vgokd.css';
import '../../css/s/s3asngb_b.css';
import '../../css/n/n171dubne.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="aoz-vgokd"/><path class="s3asngb_b"/><path class="n171dubne"/></g>`,
		"fallback": "lucide-extended:tool-case-duotone",
	});
}

export default Component;
