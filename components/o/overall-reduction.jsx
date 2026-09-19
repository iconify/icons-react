import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/z/z8b9eqr7i.css';
import '../../css/s/s496tibhe.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGIUtQfDwP"><g class="aql7dnt-u"><path class="z8b9eqr7i"/><path class="s496tibhe"/></g></mask></defs><path mask="url(#SVGIUtQfDwP)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:overall-reduction",
	});
}

export default Component;
