import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/y/yfvu-jbye.css';
import '../../css/f/fg2nprquv.css';
import '../../css/o/ow7ybdcjo.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="yfvu-jbye"/><path class="fg2nprquv"/><path class="ow7ybdcjo"/></g>`,
		"fallback": "circle-flags:tt",
	});
}

export default Component;
