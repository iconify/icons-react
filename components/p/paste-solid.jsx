import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ii3sxk_um.css';
import '../../css/b/by6kstvdi.css';
import '../../css/l/ln14d0b8c.css';
import '../../css/x/x9twdebli.css';
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
		"content": `<path class="clr-i-solid clr-i-solid-path-1 ii3sxk_um"/><path class="by6kstvdi clr-i-solid clr-i-solid-path-2"/><path class="clr-i-solid clr-i-solid-path-3 ln14d0b8c"/><rect class="clr-i-solid clr-i-solid-path-4 x9twdebli"/><path class="clr-i-solid clr-i-solid-path-5 ed1f8bbyk"/><path class="clr-i-solid clr-i-solid-path-6 x9l4mvb4c"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:paste-solid",
	});
}

export default Component;
