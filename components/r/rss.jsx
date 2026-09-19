import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/i/iaoomgb7e.css';
import '../../css/y/ytruyta7v.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGhgpcb5AU"><g class="v3_i3wktz"><path class="iaoomgb7e"/><path class="ytruyta7v"/></g></mask></defs><path mask="url(#SVGhgpcb5AU)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:rss",
	});
}

export default Component;
