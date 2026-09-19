import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/u/u9x8qellr.css';
import '../../css/i/i3yq3qbys.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGbWq8PeLv"><g class="v3_i3wktz"><path class="u9x8qellr"/><path class="i3yq3qbys"/></g></mask></defs><path mask="url(#SVGbWq8PeLv)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:resistor",
	});
}

export default Component;
