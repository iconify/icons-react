import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/k/k9nfxk8un.css';
import '../../css/r/r921pzb8j.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGD6u2Fd6e"><g class="aql7dnt-u"><path class="k9nfxk8un"/><path class="r921pzb8j"/></g></mask></defs><path mask="url(#SVGD6u2Fd6e)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:right-run",
	});
}

export default Component;
