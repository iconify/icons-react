import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/h/h9qj9o6mz.css';
import '../../css/n/n43i9sbok.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG0on0MLhW"><g class="v3_i3wktz"><rect class="h9qj9o6mz"/><path class="n43i9sbok"/></g></mask></defs><path mask="url(#SVG0on0MLhW)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:margin",
	});
}

export default Component;
