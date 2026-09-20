import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/au6clhbxu.css';
import '../../css/c/cpvng1bhd.css';
import '../../css/n/nbpor1b9l.css';

const viewBox = {"width":500,"height":500};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="au6clhbxu"><path class="cpvng1bhd"/><path class="nbpor1b9l"/></g>`,
		"fallback": "material-icon-theme:nix",
	});
}

export default Component;
