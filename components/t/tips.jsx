import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/o/ou761j2fu.css';
import '../../css/h/hk74r7aft.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGwKWWnpan"><g class="aql7dnt-u"><path class="ou761j2fu"/><path class="hk74r7aft"/></g></mask></defs><path mask="url(#SVGwKWWnpan)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:tips",
	});
}

export default Component;
