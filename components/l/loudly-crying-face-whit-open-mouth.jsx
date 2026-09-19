import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/o/oo_vs07_g.css';
import '../../css/e/eh2-i3ale.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG8xPXIdjS"><g class="ufeehvblu"><path class="oo_vs07_g"/><path class="eh2-i3ale"/></g></mask></defs><path mask="url(#SVG8xPXIdjS)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:loudly-crying-face-whit-open-mouth",
	});
}

export default Component;
