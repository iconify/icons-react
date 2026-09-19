import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/f/ff066bcmc.css';
import '../../css/w/wrlqzdago.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGAGAFydaD"><g class="aql7dnt-u"><path class="ff066bcmc"/><path class="wrlqzdago"/></g></mask></defs><path mask="url(#SVGAGAFydaD)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:map-draw",
	});
}

export default Component;
