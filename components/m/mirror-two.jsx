import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/g/g60m5abhq.css';
import '../../css/b/bvszfhbhc.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGn4LEfSCA"><g class="aql7dnt-u"><circle class="g60m5abhq"/><path class="bvszfhbhc"/></g></mask></defs><path mask="url(#SVGn4LEfSCA)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:mirror-two",
	});
}

export default Component;
