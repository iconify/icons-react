import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/a/a3egu4bnj.css';
import '../../css/k/k_94f0bqu.css';
import '../../css/z/zri7a6b5o.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGagp6hcaK"><g class="v3_i3wktz"><path class="a3egu4bnj"/><path class="k_94f0bqu"/><path class="zri7a6b5o"/></g></mask></defs><path mask="url(#SVGagp6hcaK)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:shake",
	});
}

export default Component;
