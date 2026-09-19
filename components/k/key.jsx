import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/n/n31vb0b7j.css';
import '../../css/x/xi0idpw6x.css';
import '../../css/n/nyqrc9mhu.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGlchFtdVg"><g class="v3_i3wktz"><path class="n31vb0b7j"/><path class="xi0idpw6x"/><path class="nyqrc9mhu"/></g></mask></defs><path mask="url(#SVGlchFtdVg)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:key",
	});
}

export default Component;
