import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/a/a008irbqj.css';
import '../../css/w/wjmydx_nr.css';
import '../../css/u/uwyyaccit.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGCTgDrhZD"><g class="aql7dnt-u"><path class="a008irbqj"/><path class="wjmydx_nr"/><path class="uwyyaccit"/></g></mask></defs><path mask="url(#SVGCTgDrhZD)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:vegetables",
	});
}

export default Component;
