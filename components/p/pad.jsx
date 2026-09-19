import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y7ol74bgo.css';
import '../../css/l/lgj4kaccc.css';
import '../../css/b/bvtnug55i.css';
import '../../css/u/u_p-vng4b.css';
import '../../css/n/n92tr7bff.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG4ehpCdsr"><g class="ft5dv1b6b"><path class="y7ol74bgo"/><path class="lgj4kaccc"/><path class="bvtnug55i"/><path class="u_p-vng4b"/><path class="n92tr7bff"/></g></mask></defs><path mask="url(#SVG4ehpCdsr)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:pad",
	});
}

export default Component;
