import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/i/idtbkobxl.css';
import '../../css/l/lwpanqbve.css';
import '../../css/w/wfaf1ggge.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGmIHPWbdb"><g class="aql7dnt-u"><path class="idtbkobxl"/><path class="lwpanqbve"/><path class="wfaf1ggge"/></g></mask></defs><path mask="url(#SVGmIHPWbdb)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:network-drive",
	});
}

export default Component;
