import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wgxn76bkp.css';
import '../../css/g/gf2qt1pqt.css';
import '../../css/a/a71-bmb9e.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wgxn76bkp"><circle class="gf2qt1pqt"/><path class="a71-bmb9e"/></g>`,
		"fallback": "devicon:react",
	});
}

export default Component;
