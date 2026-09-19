import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/c/cz3f9ybru.css';
import '../../css/l/l-qxtybyt.css';
import '../../css/j/j-s9jabwv.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG6xl3Gb5L"><g class="aql7dnt-u"><path class="cz3f9ybru"/><path class="l-qxtybyt"/><path class="j-s9jabwv"/></g></mask></defs><path mask="url(#SVG6xl3Gb5L)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:pot",
	});
}

export default Component;
