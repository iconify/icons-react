import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/a/albrq4bye.css';
import '../../css/q/qpokn5rgz.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGZ6gjYdwG"><g class="v3_i3wktz"><path class="albrq4bye"/><path class="qpokn5rgz"/></g></mask></defs><path mask="url(#SVGZ6gjYdwG)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:paper-money",
	});
}

export default Component;
