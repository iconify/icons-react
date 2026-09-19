import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/y/y3yom5bcd.css';
import '../../css/k/knxvrwb6y.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGEoMuNbDJ"><g class="aql7dnt-u"><path class="y3yom5bcd"/><path class="knxvrwb6y"/></g></mask></defs><path mask="url(#SVGEoMuNbDJ)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:leaves-two",
	});
}

export default Component;
