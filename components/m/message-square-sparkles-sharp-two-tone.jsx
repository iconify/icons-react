import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/d/dwz2oyjim.css';
import '../../css/s/sbweck1kl.css';
import '../../css/u/ukbh2e6hq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="dwz2oyjim"/><path class="sbweck1kl"/><path class="ukbh2e6hq"/></g>`,
		"fallback": "keyline-icons:message-square-sparkles-sharp-two-tone",
	});
}

export default Component;
