import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/k/k9anlbbxt.css';
import '../../css/h/h2x2yzbat.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGI0ofmUkm"><g class="v3_i3wktz"><rect class="k9anlbbxt"/><path class="h2x2yzbat"/></g></mask></defs><path mask="url(#SVGI0ofmUkm)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:voice",
	});
}

export default Component;
