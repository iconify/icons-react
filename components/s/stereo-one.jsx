import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/x/xdqh4gbub.css';
import '../../css/l/ly55e3b8j.css';
import '../../css/j/jrsmmweqd.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGMKvT3b8Y"><g class="rohhhzb0l"><rect class="xdqh4gbub"/><path class="ly55e3b8j"/><circle class="jrsmmweqd"/></g></mask></defs><path mask="url(#SVGMKvT3b8Y)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:stereo-one",
	});
}

export default Component;
