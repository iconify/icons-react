import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/v/vk4eesvoq.css';
import '../../css/b/b0js2ekqm.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGU1tcTb7v"><g class="aql7dnt-u"><path class="vk4eesvoq"/><path class="b0js2ekqm"/></g></mask></defs><path mask="url(#SVGU1tcTb7v)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:speaker-one",
	});
}

export default Component;
