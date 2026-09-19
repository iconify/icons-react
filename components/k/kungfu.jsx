import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cgga7abld.css';
import '../../css/y/ya8s-gi3v.css';
import '../../css/b/b8c_z7brc.css';
import '../../css/j/j-dpmubjz.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGluDhlemK"><g class="cgga7abld"><path class="ya8s-gi3v"/><path class="b8c_z7brc"/><path class="j-dpmubjz"/></g></mask></defs><path mask="url(#SVGluDhlemK)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:kungfu",
	});
}

export default Component;
