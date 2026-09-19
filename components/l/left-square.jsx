import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/h/h9qj9o6mz.css';
import '../../css/w/w-h22mbss.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGSpU8Zcif"><g class="aql7dnt-u"><rect class="h9qj9o6mz"/><path class="w-h22mbss"/></g></mask></defs><path mask="url(#SVGSpU8Zcif)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:left-square",
	});
}

export default Component;
