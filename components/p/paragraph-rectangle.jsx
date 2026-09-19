import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/k/k-t__0bsb.css';
import '../../css/v/vm5qpsucm.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGQzOebvec"><g class="aql7dnt-u"><path class="k-t__0bsb"/><path class="vm5qpsucm"/></g></mask></defs><path mask="url(#SVGQzOebvec)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:paragraph-rectangle",
	});
}

export default Component;
