import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ii3sxk_um.css';
import '../../css/b/by6kstvdi.css';
import '../../css/l/ln14d0b8c.css';
import '../../css/p/p54-7gbjy.css';
import '../../css/e/ed1f8bbyk.css';
import '../../css/x/x9l4mvb4c.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-outline clr-i-outline-path-1 ii3sxk_um"/><path class="by6kstvdi clr-i-outline clr-i-outline-path-2"/><path class="clr-i-outline clr-i-outline-path-3 ln14d0b8c"/><path class="clr-i-outline clr-i-outline-path-4 p54-7gbjy"/><path class="clr-i-outline clr-i-outline-path-5 ed1f8bbyk"/><path class="clr-i-outline clr-i-outline-path-6 x9l4mvb4c"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:paste-line",
	});
}

export default Component;
