import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/c/clsvsg_8u.css';
import '../../css/j/jydfnccii.css';
import '../../css/n/nzi04mbzv.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGX1zZCeUe"><g class="aql7dnt-u"><path class="clsvsg_8u"/><circle class="jydfnccii"/><path class="nzi04mbzv"/></g></mask></defs><path mask="url(#SVGX1zZCeUe)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:people-top-card",
	});
}

export default Component;
