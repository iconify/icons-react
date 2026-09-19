import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/l/ld3j6-bqh.css';
import '../../css/j/j7wrjtoqx.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGJHL1QdsY"><g class="rohhhzb0l"><path class="ld3j6-bqh"/><rect class="j7wrjtoqx"/></g></mask></defs><path mask="url(#SVGJHL1QdsY)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:treadmill-two",
	});
}

export default Component;
