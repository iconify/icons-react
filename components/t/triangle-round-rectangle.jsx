import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ec-8ohbed.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGRWh4Mdhm"><path class="ec-8ohbed"/></mask></defs><path mask="url(#SVGRWh4Mdhm)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:triangle-round-rectangle",
	});
}

export default Component;
