import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/k/kb9zbkb1z.css';
import '../../css/r/rapto2w_z.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGcWZSjbUt"><g class="aql7dnt-u"><circle class="kb9zbkb1z"/><path class="rapto2w_z"/></g></mask></defs><path mask="url(#SVGcWZSjbUt)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:pie-two",
	});
}

export default Component;
