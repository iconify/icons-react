import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/b/bj2gztbde.css';
import '../../css/k/ka-b-fb0g.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGr9lWrdrs"><g class="aql7dnt-u"><path class="bj2gztbde"/><path class="ka-b-fb0g"/></g></mask></defs><path mask="url(#SVGr9lWrdrs)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:rs-male",
	});
}

export default Component;
