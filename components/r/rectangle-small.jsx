import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xvfujmbgg.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGFlF8Ac6N"><path class="xvfujmbgg"/></mask></defs><path mask="url(#SVGFlF8Ac6N)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:rectangle-small",
	});
}

export default Component;
