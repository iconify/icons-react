import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/j/j-v2u4nhg.css';
import '../../css/b/bm-9awbcn.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGdziXTd4Z"><g class="v3_i3wktz"><path class="j-v2u4nhg"/><path class="bm-9awbcn"/></g></mask></defs><path mask="url(#SVGdziXTd4Z)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:smiling-face-with-squinting-eyes",
	});
}

export default Component;
