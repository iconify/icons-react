import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ed88bk2gg.css';
import '../../css/c/cnpgasf1a.css';
import '../../css/y/y7dn9kh7h.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ed88bk2gg"><path class="cnpgasf1a"/><path class="y7dn9kh7h"/></g>`,
		"fallback": "material-icon-theme:warp-light",
	});
}

export default Component;
