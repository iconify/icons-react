import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/x/x9qq19fwj.css';
import '../../css/o/oy0yg19qw.css';
import '../../css/n/n09gebbpm.css';
import '../../css/y/y8zlfsl7g.css';
import '../../css/m/m49h4_eiq.css';
import '../../css/j/j61xww1jd.css';
import '../../css/l/le9iyfafr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="x9qq19fwj"/><path class="oy0yg19qw"/><path class="n09gebbpm"/><path class="y8zlfsl7g"/><path class="m49h4_eiq"/><path class="j61xww1jd"/><path class="le9iyfafr"/></g>`,
		"fallback": "solar:toolbox-linear",
	});
}

export default Component;
