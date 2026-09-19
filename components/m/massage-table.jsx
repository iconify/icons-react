import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/i/ipngrjbif.css';
import '../../css/r/r22my0kcs.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGFf3hjcGv"><g class="v3_i3wktz"><path class="ipngrjbif"/><path class="r22my0kcs"/></g></mask></defs><path mask="url(#SVGFf3hjcGv)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:massage-table",
	});
}

export default Component;
