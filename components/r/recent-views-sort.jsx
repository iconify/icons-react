import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sywh_d5sb.css';
import '../../css/o/opzq61bog.css';
import '../../css/c/c0hz57d3e.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGJAPDIe8Z"><g class="ft5dv1b6b"><path class="sywh_d5sb"/><path class="opzq61bog"/><path class="c0hz57d3e"/></g></mask></defs><path mask="url(#SVGJAPDIe8Z)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:recent-views-sort",
	});
}

export default Component;
