import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/v/voxy1aceb.css';
import '../../css/j/jbjhzw2kz.css';
import '../../css/n/nlnyzpbpz.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGHwVmOb8z"><g class="aql7dnt-u"><path class="voxy1aceb"/><path class="jbjhzw2kz"/><path class="nlnyzpbpz"/></g></mask></defs><path mask="url(#SVGHwVmOb8z)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:tent",
	});
}

export default Component;
