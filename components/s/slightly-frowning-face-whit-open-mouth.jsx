import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/j/j-v2u4nhg.css';
import '../../css/z/z-r0-sqxd.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGPP27xcCR"><g class="v3_i3wktz"><path class="j-v2u4nhg"/><path class="z-r0-sqxd"/></g></mask></defs><path mask="url(#SVGPP27xcCR)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:slightly-frowning-face-whit-open-mouth",
	});
}

export default Component;
