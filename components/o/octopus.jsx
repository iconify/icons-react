import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f6abu1bwo.css';
import '../../css/g/gxx26rbco.css';
import '../../css/u/u15oyjf0o.css';
import '../../css/r/ry006sbtj.css';
import '../../css/f/fdlfgp37g.css';
import '../../css/c/cvexepjaw.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="f6abu1bwo"/><path class="gxx26rbco"/><path class="u15oyjf0o"/><path class="ry006sbtj"/><path class="fdlfgp37g"/><path class="cvexepjaw"/></g>`,
		"fallback": "fluent-emoji-flat:octopus",
	});
}

export default Component;
