import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/a/avy43kb9v.css';
import '../../css/b/bjqrrbbpt.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGLS4xbb9f"><g class="v3_i3wktz"><path class="avy43kb9v"/><path class="bjqrrbbpt"/></g></mask></defs><path mask="url(#SVGLS4xbb9f)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:log",
	});
}

export default Component;
