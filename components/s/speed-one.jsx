import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/r/ruqwh-abt.css';
import '../../css/a/a350jnbrs.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGPOcIjc5v"><g class="v3_i3wktz"><path class="ruqwh-abt"/><path class="a350jnbrs"/></g></mask></defs><path mask="url(#SVGPOcIjc5v)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:speed-one",
	});
}

export default Component;
