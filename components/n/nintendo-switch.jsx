import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/n/nzn78mvcl.css';
import '../../css/x/xknmx1buo.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG4zW7fuzD"><g class="aql7dnt-u"><path class="nzn78mvcl"/><path class="xknmx1buo"/></g></mask></defs><path mask="url(#SVG4zW7fuzD)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:nintendo-switch",
	});
}

export default Component;
