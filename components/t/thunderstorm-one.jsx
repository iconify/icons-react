import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/s/skf0-0h2g.css';
import '../../css/f/fruahub8w.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGbpYWDeOp"><g class="v3_i3wktz"><path class="skf0-0h2g"/><path class="fruahub8w"/></g></mask></defs><path mask="url(#SVGbpYWDeOp)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:thunderstorm-one",
	});
}

export default Component;
