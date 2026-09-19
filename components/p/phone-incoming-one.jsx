import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/r/runx2ohsi.css';
import '../../css/e/e-xtayzvh.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGMzFSTbVG"><g class="v3_i3wktz"><path class="runx2ohsi"/><path class="e-xtayzvh"/></g></mask></defs><path mask="url(#SVGMzFSTbVG)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:phone-incoming-one",
	});
}

export default Component;
