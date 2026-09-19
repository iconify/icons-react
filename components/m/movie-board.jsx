import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/r/rxsogubeb.css';
import '../../css/p/psjy2mb5h.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGUhGFRcfJ"><g class="aql7dnt-u"><path class="rxsogubeb"/><path class="psjy2mb5h"/></g></mask></defs><path mask="url(#SVGUhGFRcfJ)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:movie-board",
	});
}

export default Component;
