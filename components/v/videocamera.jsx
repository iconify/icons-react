import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/p/psxdx4bcl.css';
import '../../css/v/vlm3aubzz.css';
import '../../css/s/s7b7bgbvx.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGkTZIQbNR"><g class="rohhhzb0l"><rect class="psxdx4bcl"/><circle class="vlm3aubzz"/><path class="s7b7bgbvx"/></g></mask></defs><path mask="url(#SVGkTZIQbNR)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:videocamera",
	});
}

export default Component;
