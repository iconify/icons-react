import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/j/j-v2u4nhg.css';
import '../../css/i/igfvr8byv.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGxOPqAdAL"><g class="v3_i3wktz"><path class="j-v2u4nhg"/><path class="igfvr8byv"/></g></mask></defs><path mask="url(#SVGxOPqAdAL)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:slightly-smiling-face",
	});
}

export default Component;
