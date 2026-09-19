import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/v/v_-t39mhq.css';
import '../../css/q/qaxdd91ol.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGYn871bav"><g class="aql7dnt-u"><path class="v_-t39mhq"/><path class="qaxdd91ol"/></g></mask></defs><path mask="url(#SVGYn871bav)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:vegetable-basket",
	});
}

export default Component;
