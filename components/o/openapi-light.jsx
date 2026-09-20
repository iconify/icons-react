import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wd3mqx2ep.css';
import '../../css/s/szghgl-0e.css';
import '../../css/s/sp8ko-bub.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wd3mqx2ep"/><path class="szghgl-0e"/><path class="sp8ko-bub"/>`,
		"fallback": "material-icon-theme:openapi-light",
	});
}

export default Component;
