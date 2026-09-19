import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/j/j9hg1or3h.css';
import '../../css/i/i4w9j4bzb.css';
import '../../css/m/msva-3b9o.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGCbP2oXYF"><g class="v3_i3wktz"><path class="j9hg1or3h"/><path class="i4w9j4bzb"/><path class="msva-3b9o"/></g></mask></defs><path mask="url(#SVGCbP2oXYF)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:trend-two",
	});
}

export default Component;
