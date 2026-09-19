import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/f/fqzg-n1xw.css';
import '../../css/i/ixe451mff.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGZeL81xTZ"><g class="v3_i3wktz"><path class="fqzg-n1xw"/><path class="ixe451mff"/></g></mask></defs><path mask="url(#SVGZeL81xTZ)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:pay-code",
	});
}

export default Component;
