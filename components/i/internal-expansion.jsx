import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/e/e0pazubmt.css';
import '../../css/l/l11e97baw.css';
import '../../css/w/w19wwz2kz.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGRnwC0dlC"><g class="aql7dnt-u"><path class="e0pazubmt"/><path clip-rule="evenodd" class="l11e97baw"/><path class="w19wwz2kz"/></g></mask></defs><path mask="url(#SVGRnwC0dlC)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:internal-expansion",
	});
}

export default Component;
