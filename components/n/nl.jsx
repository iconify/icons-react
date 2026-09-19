import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/z/zh9csabqw.css';
import '../../css/y/ymn1_wb5d.css';
import '../../css/e/eucy0oomk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="zh9csabqw"/><path class="ymn1_wb5d"/><path class="eucy0oomk"/></g>`,
		"fallback": "circle-flags:nl",
	});
}

export default Component;
