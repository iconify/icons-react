import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/f/fawnadrdb.css';
import '../../css/e/e4inwoy3s.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGsYu5BdCs"><g class="v3_i3wktz"><path class="fawnadrdb"/><path class="e4inwoy3s"/></g></mask></defs><path mask="url(#SVGsYu5BdCs)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:menu-fold-one",
	});
}

export default Component;
