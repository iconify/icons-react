import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/n/n1hclzbdr.css';
import '../../css/q/qzb3rzbwv.css';
import '../../css/a/aoi7w1s0p.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="n1hclzbdr"/><path class="qzb3rzbwv"/><path class="aoi7w1s0p"/></g>`,
		"fallback": "circle-flags:mq-old",
	});
}

export default Component;
