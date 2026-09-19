import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/q/q-7r1-bmd.css';
import '../../css/y/yxx9zxbgv.css';
import '../../css/s/syrm5jbdq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="q-7r1-bmd"/><path class="yxx9zxbgv"/><path class="syrm5jbdq"/></g>`,
		"fallback": "circle-flags:ru-lpr",
	});
}

export default Component;
