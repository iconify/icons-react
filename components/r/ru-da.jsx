import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/g/gtt37jryw.css';
import '../../css/w/w260_6bbu.css';
import '../../css/r/rqx6rkwdh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="gtt37jryw"/><path class="w260_6bbu"/><path class="rqx6rkwdh"/></g>`,
		"fallback": "circle-flags:ru-da",
	});
}

export default Component;
