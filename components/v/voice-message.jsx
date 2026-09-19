import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x36h_kb1w.css';
import '../../css/l/l1gz4_bhl.css';
import '../../css/d/dzkxljb6w.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGB2bN7mun"><g class="ft5dv1b6b"><path class="x36h_kb1w"/><path class="l1gz4_bhl"/><path class="dzkxljb6w"/></g></mask></defs><path mask="url(#SVGB2bN7mun)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:voice-message",
	});
}

export default Component;
