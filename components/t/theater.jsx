import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/c/c3gxzqk3r.css';
import '../../css/h/h-lp_vb0a.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGVHvGbeBU"><g class="rohhhzb0l"><path clip-rule="evenodd" class="c3gxzqk3r"/><path class="h-lp_vb0a"/></g></mask></defs><path mask="url(#SVGVHvGbeBU)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:theater",
	});
}

export default Component;
