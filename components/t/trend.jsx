import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/u/ua-z8vb0h.css';
import '../../css/s/sum4lw3dc.css';
import '../../css/h/h8swm4ika.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGOqCrabHq"><g class="v3_i3wktz"><path class="ua-z8vb0h"/><path class="sum4lw3dc"/><path class="h8swm4ika"/></g></mask></defs><path mask="url(#SVGOqCrabHq)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:trend",
	});
}

export default Component;
