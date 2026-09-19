import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/l/lbuozbbbq.css';
import '../../css/n/n5j6wubbb.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGN0XfybUI"><g class="aql7dnt-u"><rect class="lbuozbbbq"/><path class="n5j6wubbb"/></g></mask></defs><path mask="url(#SVGN0XfybUI)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:multi-picture-carousel",
	});
}

export default Component;
