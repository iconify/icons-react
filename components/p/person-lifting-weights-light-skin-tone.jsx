import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/khsi3si7g.css';
import '../../css/i/ig-dzq6hv.css';
import '../../css/y/ym8-nu1-z.css';
import '../../css/o/ol5bs9bwy.css';
import '../../css/x/x8poo_bjf.css';
import '../../css/b/bhez61bon.css';
import '../../css/h/hi3cwbbvu.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="khsi3si7g"/><g class="ig-dzq6hv"><circle class="ym8-nu1-z"/><path class="ol5bs9bwy"/></g><g class="x8poo_bjf"><circle class="ym8-nu1-z"/><path class="bhez61bon"/><path class="hi3cwbbvu"/></g>`,
		"fallback": "openmoji:person-lifting-weights-light-skin-tone",
	});
}

export default Component;
