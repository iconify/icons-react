import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/w/wekrm7bch.css';
import '../../css/j/jo108-7wp.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGbL6hfdhq"><g class="v3_i3wktz"><rect class="wekrm7bch"/><path class="jo108-7wp"/></g></mask></defs><path mask="url(#SVGbL6hfdhq)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:new-computer",
	});
}

export default Component;
