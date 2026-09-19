import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/e/enuncybsk.css';
import '../../css/h/hyr8-8bhd.css';
import '../../css/h/ha34b3bre.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGRcYkvdtK"><g class="v3_i3wktz"><path class="enuncybsk"/><path class="hyr8-8bhd"/><path class="ha34b3bre"/></g></mask></defs><path mask="url(#SVGRcYkvdtK)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:multi-function-knife",
	});
}

export default Component;
