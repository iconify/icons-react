import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jkxd33wbl.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGbYfWseDm"><path class="jkxd33wbl"/></mask></defs><path mask="url(#SVGbYfWseDm)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:outdoor",
	});
}

export default Component;
