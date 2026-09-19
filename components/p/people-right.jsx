import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/p/pzosztbse.css';
import '../../css/d/dg-ffvvyx.css';
import '../../css/y/ylhp4cc8g.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG4SI30dqX"><g class="aql7dnt-u"><path class="pzosztbse"/><path class="dg-ffvvyx"/><path class="ylhp4cc8g"/></g></mask></defs><path mask="url(#SVG4SI30dqX)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:people-right",
	});
}

export default Component;
