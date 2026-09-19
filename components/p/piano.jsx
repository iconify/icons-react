import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/r/r2tfubbpc.css';
import '../../css/h/hq7te623q.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGHklQqbjU"><g class="aql7dnt-u"><path class="r2tfubbpc"/><path class="hq7te623q"/></g></mask></defs><path mask="url(#SVGHklQqbjU)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:piano",
	});
}

export default Component;
