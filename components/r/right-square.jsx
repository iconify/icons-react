import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/h/h9qj9o6mz.css';
import '../../css/h/hfn36ebxi.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGLU4qrdIN"><g class="aql7dnt-u"><rect class="h9qj9o6mz"/><path class="hfn36ebxi"/></g></mask></defs><path mask="url(#SVGLU4qrdIN)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:right-square",
	});
}

export default Component;
