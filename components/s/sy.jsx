import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/z/zh9csabqw.css';
import '../../css/q/qx4wjpwys.css';
import '../../css/m/m3q091brb.css';
import '../../css/s/smicazbch.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="zh9csabqw"/><path class="qx4wjpwys"/><path class="m3q091brb"/><path class="smicazbch"/></g>`,
		"fallback": "circle-flags:sy",
	});
}

export default Component;
