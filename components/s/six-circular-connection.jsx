import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/r/rtwj0brya.css';
import '../../css/u/umq8qcomr.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGMCtwEc4r"><g class="aql7dnt-u"><path class="rtwj0brya"/><path class="umq8qcomr"/></g></mask></defs><path mask="url(#SVGMCtwEc4r)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:six-circular-connection",
	});
}

export default Component;
