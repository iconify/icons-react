import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hv130ab-t.css';
import '../../css/q/qrzpqooux.css';
import '../../css/t/tele8ebjz.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGnEyzbdTC"><g class="hv130ab-t"><path class="qrzpqooux"/><path class="tele8ebjz"/></g></mask></defs><path mask="url(#SVGnEyzbdTC)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:message-one",
	});
}

export default Component;
