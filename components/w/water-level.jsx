import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/p/pr0r_23gm.css';
import '../../css/g/g1j_4nbjv.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGuIAk4cPA"><g class="v3_i3wktz"><path clip-rule="evenodd" class="pr0r_23gm"/><path class="g1j_4nbjv"/></g></mask></defs><path mask="url(#SVGuIAk4cPA)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:water-level",
	});
}

export default Component;
