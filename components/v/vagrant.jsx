import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i96mgiblb.css';
import '../../css/u/uj6e1ab-d.css';

const viewBox = {"width":140.625,"height":140.625};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i96mgiblb"/><path class="uj6e1ab-d"/>`,
		"fallback": "material-icon-theme:vagrant",
	});
}

export default Component;
