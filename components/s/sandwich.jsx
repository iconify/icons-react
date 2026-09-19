import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/w/w_665e7-p.css';
import '../../css/f/fi7oqzbeg.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGD1EMvbsz"><g class="aql7dnt-u"><path class="w_665e7-p"/><path class="fi7oqzbeg"/></g></mask></defs><path mask="url(#SVGD1EMvbsz)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:sandwich",
	});
}

export default Component;
