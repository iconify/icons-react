import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/a/amol9fbgq.css';
import '../../css/j/jk8ff9tlc.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGWLQvjenu"><g class="v3_i3wktz"><path class="amol9fbgq"/><path class="jk8ff9tlc"/></g></mask></defs><path mask="url(#SVGWLQvjenu)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:water-rate",
	});
}

export default Component;
