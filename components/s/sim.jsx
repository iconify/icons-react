import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/u/u5c2lzzzo.css';
import '../../css/b/bfo77bb9l.css';
import '../../css/i/ipdg3vquv.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGIE4O6drv"><g class="v3_i3wktz"><path class="u5c2lzzzo"/><path class="bfo77bb9l"/><path class="ipdg3vquv"/></g></mask></defs><path mask="url(#SVGIE4O6drv)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:sim",
	});
}

export default Component;
