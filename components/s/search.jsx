import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/f/fh8rzobwg.css';
import '../../css/x/xfulg0g6i.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGzmt0MemV"><g class="v3_i3wktz"><path class="fh8rzobwg"/><path class="xfulg0g6i"/></g></mask></defs><path mask="url(#SVGzmt0MemV)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:search",
	});
}

export default Component;
