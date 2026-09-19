import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/m/m6ifnhj0n.css';
import '../../css/n/nrx09nbid.css';
import '../../css/k/k1p-s986k.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGiFNxDdbe"><g class="v3_i3wktz"><path class="m6ifnhj0n"/><path class="nrx09nbid"/><path class="k1p-s986k"/></g></mask></defs><path mask="url(#SVGiFNxDdbe)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:male",
	});
}

export default Component;
