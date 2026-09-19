import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/j/j-v2u4nhg.css';
import '../../css/o/ojp9--njg.css';
import '../../css/k/krw5o0bvk.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGU1vDUb6k"><g class="v3_i3wktz"><path class="j-v2u4nhg"/><path class="ojp9--njg"/><path class="krw5o0bvk"/></g></mask></defs><path mask="url(#SVGU1vDUb6k)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:record-disc",
	});
}

export default Component;
