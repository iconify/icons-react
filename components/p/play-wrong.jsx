import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/a/afw5bxb9f.css';
import '../../css/s/s51uqybkz.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGu13uHDQK"><g class="v3_i3wktz"><path class="afw5bxb9f"/><path class="s51uqybkz"/></g></mask></defs><path mask="url(#SVGu13uHDQK)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:play-wrong",
	});
}

export default Component;
