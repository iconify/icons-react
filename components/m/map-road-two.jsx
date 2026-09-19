import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/f/fyv63n06x.css';
import '../../css/g/ge2z8-slh.css';
import '../../css/l/l8-q0ccsa.css';
import '../../css/k/k-3466b-a.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGdIn5hdef"><g class="aql7dnt-u"><path class="fyv63n06x"/><path class="ge2z8-slh"/><path class="l8-q0ccsa"/><path class="k-3466b-a"/></g></mask></defs><path mask="url(#SVGdIn5hdef)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:map-road-two",
	});
}

export default Component;
