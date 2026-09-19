import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/m/mt4remb0w.css';
import '../../css/r/r22h40bsk.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG8qpNQeJl"><g class="aql7dnt-u"><path class="mt4remb0w"/><path class="r22h40bsk"/></g></mask></defs><path mask="url(#SVG8qpNQeJl)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:macadamia-nut",
	});
}

export default Component;
