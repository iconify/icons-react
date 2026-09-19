import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/l/l7glbwcru.css';
import '../../css/w/wkfxevblu.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG4IxzvcIZ"><g class="aql7dnt-u"><path class="l7glbwcru"/><path class="wkfxevblu"/></g></mask></defs><path mask="url(#SVG4IxzvcIZ)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:success",
	});
}

export default Component;
