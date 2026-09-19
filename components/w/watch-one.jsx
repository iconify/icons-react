import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/x/xm80o4b2a.css';
import '../../css/k/kpi7w9prg.css';
import '../../css/d/dx_hcswmk.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGpPeDT33j"><g class="rohhhzb0l"><path class="xm80o4b2a"/><circle class="kpi7w9prg"/><path class="dx_hcswmk"/></g></mask></defs><path mask="url(#SVGpPeDT33j)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:watch-one",
	});
}

export default Component;
