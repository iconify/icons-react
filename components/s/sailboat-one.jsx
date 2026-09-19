import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/n/n22bo8byq.css';
import '../../css/a/ab1wfbc-v.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGJv0Ade4j"><g class="v3_i3wktz"><path class="n22bo8byq"/><path class="ab1wfbc-v"/></g></mask></defs><path mask="url(#SVGJv0Ade4j)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:sailboat-one",
	});
}

export default Component;
