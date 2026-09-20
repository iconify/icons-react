import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/ti6n5-brp.css';
import '../../css/x/xlhg_tibn.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g transform="matrix(1.5 0 0 1.5 -23.858 -7.25)"><path class="ti6n5-brp"/><rect class="xlhg_tibn"/></g>`,
		"fallback": "material-icon-theme:opencode-light",
	});
}

export default Component;
