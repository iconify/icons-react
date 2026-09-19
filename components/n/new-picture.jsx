import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/h/h9qj9o6mz.css';
import '../../css/g/gyf7w_zhg.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGLmNZcbbs"><g class="v3_i3wktz"><rect class="h9qj9o6mz"/><path class="gyf7w_zhg"/></g></mask></defs><path mask="url(#SVGLmNZcbbs)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:new-picture",
	});
}

export default Component;
