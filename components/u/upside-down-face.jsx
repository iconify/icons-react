import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/h/hgyipz03i.css';
import '../../css/t/to1q24v3e.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGNFhCWduG"><g class="v3_i3wktz"><path class="hgyipz03i"/><path class="to1q24v3e"/></g></mask></defs><path mask="url(#SVGNFhCWduG)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:upside-down-face",
	});
}

export default Component;
