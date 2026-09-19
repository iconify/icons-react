import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/w/wjmi2eb4l.css';
import '../../css/e/ej3cr6b9e.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGbQ8yscDi"><g class="v3_i3wktz"><rect class="wjmi2eb4l"/><path class="ej3cr6b9e"/></g></mask></defs><path mask="url(#SVGbQ8yscDi)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:unlock",
	});
}

export default Component;
