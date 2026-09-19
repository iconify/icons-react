import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/y/ykho7dqzc.css';
import '../../css/a/a7_weletz.css';
import '../../css/r/rtf887bbu.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG66kxie0d"><g class="aql7dnt-u"><path class="ykho7dqzc"/><path class="a7_weletz"/><path class="rtf887bbu"/></g></mask></defs><path mask="url(#SVG66kxie0d)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:measuring-cup",
	});
}

export default Component;
