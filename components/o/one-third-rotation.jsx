import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/r/r5_m18j1a.css';
import '../../css/t/tmsihsbky.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG8hcgmdmL"><g class="aql7dnt-u"><path class="r5_m18j1a"/><path class="tmsihsbky"/></g></mask></defs><path mask="url(#SVG8hcgmdmL)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:one-third-rotation",
	});
}

export default Component;
