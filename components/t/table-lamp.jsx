import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/n/nin1__b8i.css';
import '../../css/a/ac8u4pb0r.css';
import '../../css/i/i4_4y8x4l.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGxaTrTK7I"><g class="aql7dnt-u"><path class="nin1__b8i"/><path class="ac8u4pb0r"/><path class="i4_4y8x4l"/></g></mask></defs><path mask="url(#SVGxaTrTK7I)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:table-lamp",
	});
}

export default Component;
