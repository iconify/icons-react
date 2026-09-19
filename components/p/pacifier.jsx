import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/m/mlpd71upt.css';
import '../../css/b/bvyljdv9y.css';
import '../../css/s/s-eh6tbeb.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGRj3jg5kR"><g class="aql7dnt-u"><path class="mlpd71upt"/><path class="bvyljdv9y"/><path class="s-eh6tbeb"/></g></mask></defs><path mask="url(#SVGRj3jg5kR)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:pacifier",
	});
}

export default Component;
