import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/q/qgceg4vvs.css';
import '../../css/e/e6lzxacir.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGCPOHvdsv"><g class="aql7dnt-u"><path class="qgceg4vvs"/><path class="e6lzxacir"/></g></mask></defs><path mask="url(#SVGCPOHvdsv)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:message",
	});
}

export default Component;
