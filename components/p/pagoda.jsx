import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/f/fr7h38bjf.css';
import '../../css/e/ef6l1eg-m.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGGyssyseA"><g class="v3_i3wktz"><path class="fr7h38bjf"/><path class="ef6l1eg-m"/></g></mask></defs><path mask="url(#SVGGyssyseA)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:pagoda",
	});
}

export default Component;
