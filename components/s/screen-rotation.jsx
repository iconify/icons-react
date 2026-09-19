import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/f/f2e3a6bxc.css';
import '../../css/v/vis7orbfm.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG8G5P1bdF"><g class="aql7dnt-u"><path class="f2e3a6bxc"/><path class="vis7orbfm"/></g></mask></defs><path mask="url(#SVG8G5P1bdF)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:screen-rotation",
	});
}

export default Component;
