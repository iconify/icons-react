import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/o/oc1spnb4j.css';
import '../../css/y/y1_alg6mo.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGxGKFOeVC"><g class="aql7dnt-u"><rect class="oc1spnb4j"/><path class="y1_alg6mo"/></g></mask></defs><path mask="url(#SVGxGKFOeVC)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:trunk",
	});
}

export default Component;
