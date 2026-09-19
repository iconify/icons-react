import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/adexpl72i.css';
import '../../css/k/kb9zbkb1z.css';
import '../../css/a/a7nlqfoyx.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGfrErJbUE"><g class="adexpl72i"><circle class="kb9zbkb1z"/><path class="a7nlqfoyx"/></g></mask></defs><path mask="url(#SVGfrErJbUE)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:red-cross",
	});
}

export default Component;
