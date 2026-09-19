import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/m/midqvbcgl.css';
import '../../css/c/c0gmrobzl.css';
import '../../css/r/r47dkf1hc.css';
import '../../css/z/zd46sgbja.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGpWVYQcrI"><g class="aql7dnt-u"><path class="midqvbcgl"/><path class="c0gmrobzl"/><path class="r47dkf1hc"/><path class="zd46sgbja"/></g></mask></defs><path mask="url(#SVGpWVYQcrI)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:retro-bag",
	});
}

export default Component;
