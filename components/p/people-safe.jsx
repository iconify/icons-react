import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/c/ccbbnd11y.css';
import '../../css/m/meg_-wbqb.css';
import '../../css/y/ybmshrj6v.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGnEk6WccL"><g class="v3_i3wktz"><path class="ccbbnd11y"/><circle class="meg_-wbqb"/><path class="ybmshrj6v"/></g></mask></defs><path mask="url(#SVGnEk6WccL)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:people-safe",
	});
}

export default Component;
