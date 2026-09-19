import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/h/hvxoz8z9b.css';
import '../../css/v/vzdm28mye.css';
import '../../css/l/l8a03sjai.css';
import '../../css/v/vtxrx9bbe.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="hvxoz8z9b"/><path class="vzdm28mye"/><path class="l8a03sjai"/><path class="vtxrx9bbe"/></g>`,
		"fallback": "circle-flags:mh",
	});
}

export default Component;
