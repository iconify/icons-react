import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e8jsn2i4o.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGEpqjdbuG"><path class="e8jsn2i4o"/></mask></defs><path mask="url(#SVGEpqjdbuG)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:pin",
	});
}

export default Component;
