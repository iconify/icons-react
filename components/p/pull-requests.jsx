import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/u/ujmxbfbzu.css';
import '../../css/q/qna-m1b4k.css';
import '../../css/u/ucg8mrbfd.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGeDLA7bNQ"><g class="v3_i3wktz"><path class="ujmxbfbzu"/><path class="qna-m1b4k"/><path class="ucg8mrbfd"/></g></mask></defs><path mask="url(#SVGeDLA7bNQ)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:pull-requests",
	});
}

export default Component;
