import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hv130ab-t.css';
import '../../css/d/dcxavdy0e.css';
import '../../css/r/rlhd26bov.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGSVLjOcsa"><g class="hv130ab-t"><path class="dcxavdy0e"/><path class="rlhd26bov"/></g></mask></defs><path mask="url(#SVGSVLjOcsa)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:optimize",
	});
}

export default Component;
