import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/q/q9z220ulp.css';
import '../../css/b/b98o3ib5q.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGlcr4TdQJ"><g class="v3_i3wktz"><path class="q9z220ulp"/><path class="b98o3ib5q"/></g></mask></defs><path mask="url(#SVGlcr4TdQJ)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:paper-ship",
	});
}

export default Component;
