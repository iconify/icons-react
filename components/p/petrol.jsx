import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/t/tv8cojbtd.css';
import '../../css/m/m4ez7y5oo.css';
import '../../css/s/sy_aj1b_e.css';
import '../../css/d/dytkvhn7h.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGYFWnZlcI"><g class="v3_i3wktz"><path class="tv8cojbtd"/><path class="m4ez7y5oo"/><path class="sy_aj1b_e"/><path class="dytkvhn7h"/></g></mask></defs><path mask="url(#SVGYFWnZlcI)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:petrol",
	});
}

export default Component;
