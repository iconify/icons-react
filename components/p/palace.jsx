import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/h/hobk2lbyn.css';
import '../../css/y/y_f4_bbgw.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGp58wRdoD"><g class="aql7dnt-u"><path class="hobk2lbyn"/><path class="y_f4_bbgw"/></g></mask></defs><path mask="url(#SVGp58wRdoD)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:palace",
	});
}

export default Component;
