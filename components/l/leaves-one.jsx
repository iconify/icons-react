import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/b/bbzywqx4n.css';
import '../../css/s/sechs05ci.css';
import '../../css/l/lci9jw8ac.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGaKUoYTNU"><g class="v3_i3wktz"><path class="bbzywqx4n"/><path class="sechs05ci"/><path class="lci9jw8ac"/></g></mask></defs><path mask="url(#SVGaKUoYTNU)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:leaves-one",
	});
}

export default Component;
