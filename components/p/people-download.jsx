import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/k/kznc4_ijf.css';
import '../../css/u/utoe8x85b.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGBFjn5bfN"><g class="v3_i3wktz"><path class="kznc4_ijf"/><path class="utoe8x85b"/></g></mask></defs><path mask="url(#SVGBFjn5bfN)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:people-download",
	});
}

export default Component;
