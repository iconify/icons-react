import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/e/evhwi6eat.css';
import '../../css/c/czt218btr.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG1xEjacUz"><g class="aql7dnt-u"><path class="evhwi6eat"/><path class="czt218btr"/></g></mask></defs><path mask="url(#SVG1xEjacUz)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:texture-two",
	});
}

export default Component;
