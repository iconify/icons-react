import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/g/gj7m2tbbh.css';
import '../../css/o/omd-qi_-c.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGM7aMbcQo"><g class="v3_i3wktz"><path class="gj7m2tbbh"/><path class="omd-qi_-c"/></g></mask></defs><path mask="url(#SVGM7aMbcQo)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:protect",
	});
}

export default Component;
