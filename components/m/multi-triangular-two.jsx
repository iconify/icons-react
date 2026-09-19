import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/q/q-pan9bpu.css';
import '../../css/n/ni2kn61-e.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGNj5d8daY"><g class="aql7dnt-u"><path class="q-pan9bpu"/><path class="ni2kn61-e"/></g></mask></defs><path mask="url(#SVGNj5d8daY)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:multi-triangular-two",
	});
}

export default Component;
