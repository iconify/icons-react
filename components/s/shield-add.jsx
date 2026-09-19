import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/u/ulkx0nbdh.css';
import '../../css/v/vlf9sc5tl.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGgNwF7b1W"><g class="v3_i3wktz"><path class="ulkx0nbdh"/><path class="vlf9sc5tl"/></g></mask></defs><path mask="url(#SVGgNwF7b1W)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:shield-add",
	});
}

export default Component;
