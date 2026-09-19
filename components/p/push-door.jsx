import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/m/mxp84ibzr.css';
import '../../css/t/tnokb4_9i.css';
import '../../css/x/xxy4glkza.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGFAGCHeXA"><g class="aql7dnt-u"><path class="mxp84ibzr"/><path class="tnokb4_9i"/><path class="xxy4glkza"/></g></mask></defs><path mask="url(#SVGFAGCHeXA)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:push-door",
	});
}

export default Component;
