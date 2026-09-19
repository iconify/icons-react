import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/c/cmtf-dnpo.css';
import '../../css/f/f95my6llm.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG1TJ0NSpq"><g class="v3_i3wktz"><path class="cmtf-dnpo"/><path class="f95my6llm"/></g></mask></defs><path mask="url(#SVG1TJ0NSpq)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:vial",
	});
}

export default Component;
