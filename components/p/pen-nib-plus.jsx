import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jsj3crtht.css';
import '../../css/u/ue8gdp54l.css';
import '../../css/f/fqjqblaab.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jsj3crtht"/><path class="ue8gdp54l"/><path class="fqjqblaab"/></g>`,
		"fallback": "andrsrxn:pen-nib-plus",
	});
}

export default Component;
