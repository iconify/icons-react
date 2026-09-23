import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/x/x-_5ilohg.css';
import '../../css/o/of52wgbuj.css';
import '../../css/s/sd8cfcjbo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="x-_5ilohg"/><path class="of52wgbuj"/><path class="sd8cfcjbo"/></g>`,
		"fallback": "keyline-icons:square-divide-sharp-duotone",
	});
}

export default Component;
