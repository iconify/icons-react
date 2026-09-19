import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x36h_kb1w.css';
import '../../css/p/p55tn28js.css';
import '../../css/o/o1ec32b0j.css';
import '../../css/v/v7m8vzxeb.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG3G7KoctU"><g class="ft5dv1b6b"><path class="x36h_kb1w"/><circle class="p55tn28js"/><circle class="o1ec32b0j"/><circle class="v7m8vzxeb"/></g></mask></defs><path mask="url(#SVG3G7KoctU)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:more-two",
	});
}

export default Component;
