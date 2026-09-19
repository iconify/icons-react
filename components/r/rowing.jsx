import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cgga7abld.css';
import '../../css/y/yplbaw3db.css';
import '../../css/j/jkcu7kbhq.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGiGiSwbSe"><g class="cgga7abld"><path class="yplbaw3db"/><path class="jkcu7kbhq"/></g></mask></defs><path mask="url(#SVGiGiSwbSe)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:rowing",
	});
}

export default Component;
