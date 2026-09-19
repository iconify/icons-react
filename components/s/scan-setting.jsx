import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/i/iirtqzb_w.css';
import '../../css/q/q-a1_7htw.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGz9sPwe5X"><g class="aql7dnt-u"><rect class="iirtqzb_w"/><path class="q-a1_7htw"/></g></mask></defs><path mask="url(#SVGz9sPwe5X)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:scan-setting",
	});
}

export default Component;
