import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/r/rcj_7sg0m.css';
import '../../css/x/xagzqcc9t.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGpMgtVCXv"><g class="aql7dnt-u"><path class="rcj_7sg0m"/><path class="xagzqcc9t"/></g></mask></defs><path mask="url(#SVGpMgtVCXv)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:surveillance-cameras-two",
	});
}

export default Component;
