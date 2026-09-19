import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/d/dgs2tgb2s.css';
import '../../css/y/yn551zh7z.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGwTJ2KeRQ"><g class="v3_i3wktz"><path class="dgs2tgb2s"/><path class="yn551zh7z"/></g></mask></defs><path mask="url(#SVGwTJ2KeRQ)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:ungroup",
	});
}

export default Component;
