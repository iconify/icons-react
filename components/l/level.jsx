import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/e/e72qrbbxo.css';
import '../../css/n/ne4zzcnnq.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGB9IqhatS"><g class="aql7dnt-u"><path class="e72qrbbxo"/><path class="ne4zzcnnq"/></g></mask></defs><path mask="url(#SVGB9IqhatS)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:level",
	});
}

export default Component;
