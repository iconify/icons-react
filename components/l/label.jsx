import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/o/o8s2cpv2k.css';
import '../../css/j/jy0gxjb-v.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGdzEbUc2s"><g class="aql7dnt-u"><path class="o8s2cpv2k"/><path class="jy0gxjb-v"/></g></mask></defs><path mask="url(#SVGdzEbUc2s)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:label",
	});
}

export default Component;
