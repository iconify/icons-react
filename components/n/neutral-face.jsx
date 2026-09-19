import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/j/j-v2u4nhg.css';
import '../../css/p/p8dxcdcoy.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGnpKPCbqY"><g class="v3_i3wktz"><path class="j-v2u4nhg"/><path class="p8dxcdcoy"/></g></mask></defs><path mask="url(#SVGnpKPCbqY)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:neutral-face",
	});
}

export default Component;
