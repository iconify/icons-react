import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/z/z3lx3r37r.css';
import '../../css/l/lgog-_bex.css';
import '../../css/h/h9yclccjg.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGc1pfFsqh"><g class="rohhhzb0l"><path class="z3lx3r37r"/><path class="lgog-_bex"/><path clip-rule="evenodd" class="h9yclccjg"/></g></mask></defs><path mask="url(#SVGc1pfFsqh)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:three-d-glasses",
	});
}

export default Component;
