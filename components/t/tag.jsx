import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/i/iaoomgb7e.css';
import '../../css/k/kvh9upbae.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG2m4WoNWP"><g class="v3_i3wktz"><path class="iaoomgb7e"/><path class="kvh9upbae"/></g></mask></defs><path mask="url(#SVG2m4WoNWP)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:tag",
	});
}

export default Component;
