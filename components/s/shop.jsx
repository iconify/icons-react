import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/u/u12oc-1ez.css';
import '../../css/x/x0yq8fapu.css';
import '../../css/w/wf6zkcc8o.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGJq9qkcCg"><g class="aql7dnt-u"><path class="u12oc-1ez"/><path class="x0yq8fapu"/><path class="wf6zkcc8o"/></g></mask></defs><path mask="url(#SVGJq9qkcCg)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:shop",
	});
}

export default Component;
