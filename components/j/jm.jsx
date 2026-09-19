import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/i/iapo1xjqq.css';
import '../../css/m/m720l8i5h.css';
import '../../css/z/ztojozshk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="iapo1xjqq"/><path class="m720l8i5h"/><path class="ztojozshk"/></g>`,
		"fallback": "circle-flags:jm",
	});
}

export default Component;
