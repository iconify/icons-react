import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/x/xitc-6bqz.css';
import '../../css/o/o5ivlpbrd.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGU0JlVdWH"><g class="aql7dnt-u"><path clip-rule="evenodd" class="xitc-6bqz"/><path class="o5ivlpbrd"/></g></mask></defs><path mask="url(#SVGU0JlVdWH)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:noodles",
	});
}

export default Component;
