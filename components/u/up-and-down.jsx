import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/n/n337d2b4s.css';
import '../../css/h/h-f1dmm4x.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG6QavSbrV"><g class="aql7dnt-u"><path class="n337d2b4s"/><path class="h-f1dmm4x"/></g></mask></defs><path mask="url(#SVG6QavSbrV)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:up-and-down",
	});
}

export default Component;
