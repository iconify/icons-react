import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/j/jukluw79g.css';
import '../../css/w/w1wv4tb9z.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGeFs1icgk"><g class="v3_i3wktz"><path class="jukluw79g"/><path class="w1wv4tb9z"/></g></mask></defs><path mask="url(#SVGeFs1icgk)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:notebook",
	});
}

export default Component;
