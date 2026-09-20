import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/ghya2pbow.css';
import '../../css/r/rg-bdgbti.css';
import '../../css/c/ceitnjb9j.css';
import '../../css/f/fv6g2tb8z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><circle class="ghya2pbow"/><path class="rg-bdgbti"/><circle class="ceitnjb9j"/><path class="fv6g2tb8z"/></g>`,
		"fallback": "lucide:user-search",
	});
}

export default Component;
