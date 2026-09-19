import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/g/geju8gabu.css';
import '../../css/g/gkm71ts8s.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGEcdaPLBx"><g class="aql7dnt-u"><path class="geju8gabu"/><path class="gkm71ts8s"/></g></mask></defs><path mask="url(#SVGEcdaPLBx)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:round-caliper",
	});
}

export default Component;
