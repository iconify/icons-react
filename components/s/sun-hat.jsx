import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/u/ufbcn_xbu.css';
import '../../css/i/i18zfbb0s.css';
import '../../css/j/j5_rsh35x.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGhZSJPbNS"><g class="aql7dnt-u"><path class="ufbcn_xbu"/><path class="i18zfbb0s"/><path class="j5_rsh35x"/></g></mask></defs><path mask="url(#SVGhZSJPbNS)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:sun-hat",
	});
}

export default Component;
