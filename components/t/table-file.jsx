import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/s/s6uqvybtd.css';
import '../../css/h/hoxyj3bqy.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGerbNUc4e"><g class="v3_i3wktz"><path class="s6uqvybtd"/><path class="hoxyj3bqy"/></g></mask></defs><path mask="url(#SVGerbNUc4e)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:table-file",
	});
}

export default Component;
