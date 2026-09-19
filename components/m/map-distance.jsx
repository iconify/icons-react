import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/i/inojwwb7m.css';
import '../../css/n/n2sextrqm.css';
import '../../css/d/dgnr1xb0j.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGisIfnbwp"><g class="v3_i3wktz"><path class="inojwwb7m"/><path class="n2sextrqm"/><path class="dgnr1xb0j"/></g></mask></defs><path mask="url(#SVGisIfnbwp)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:map-distance",
	});
}

export default Component;
