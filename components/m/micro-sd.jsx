import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/q/qc5yn2ygv.css';
import '../../css/y/yg4vlgrtx.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGFEeZHd1I"><g class="aql7dnt-u"><path class="qc5yn2ygv"/><path class="yg4vlgrtx"/></g></mask></defs><path mask="url(#SVGFEeZHd1I)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:micro-sd",
	});
}

export default Component;
