import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/x/xnu5lobkb.css';
import '../../css/j/jjiany4ql.css';
import '../../css/q/qxq43kb0f.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG2VyDsdCy"><g class="rohhhzb0l"><path class="xnu5lobkb"/><path class="jjiany4ql"/><path class="qxq43kb0f"/></g></mask></defs><path mask="url(#SVG2VyDsdCy)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:shaver",
	});
}

export default Component;
