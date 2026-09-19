import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/h/ha1m0acqh.css';
import '../../css/w/wkxwu3bsi.css';
import '../../css/i/i1vxufb7n.css';
import '../../css/f/fxoqbf0fg.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGyzgoLcxy"><g class="v3_i3wktz"><path class="ha1m0acqh"/><path class="wkxwu3bsi"/><path class="i1vxufb7n"/><path class="fxoqbf0fg"/></g></mask></defs><path mask="url(#SVGyzgoLcxy)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:mail-review",
	});
}

export default Component;
