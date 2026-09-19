import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hv130ab-t.css';
import '../../css/l/ldklbzbzw.css';
import '../../css/d/d7myvrb7j.css';
import '../../css/z/zew7e1b0p.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGUJvaJd0o"><g class="hv130ab-t"><path class="ldklbzbzw"/><path class="d7myvrb7j"/><path class="zew7e1b0p"/></g></mask></defs><path mask="url(#SVGUJvaJd0o)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:reload",
	});
}

export default Component;
