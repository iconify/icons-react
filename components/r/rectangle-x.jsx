import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/y/ye8ewzq1l.css';
import '../../css/z/ze8hslbqf.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGSVFBbdlk"><g class="v3_i3wktz"><path class="ye8ewzq1l"/><path class="ze8hslbqf"/></g></mask></defs><path mask="url(#SVGSVFBbdlk)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:rectangle-x",
	});
}

export default Component;
