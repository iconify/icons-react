import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cgga7abld.css';
import '../../css/s/si50jvboo.css';
import '../../css/k/k-gfreizg.css';
import '../../css/f/f0elirbsr.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG8Z0dpeyP"><g class="cgga7abld"><path class="si50jvboo"/><path class="k-gfreizg"/><path class="f0elirbsr"/></g></mask></defs><path mask="url(#SVG8Z0dpeyP)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:skiing-nordic",
	});
}

export default Component;
