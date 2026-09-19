import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x36h_kb1w.css';
import '../../css/b/bbzwh_4tl.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGHmRZQdpG"><g class="ft5dv1b6b"><path class="x36h_kb1w"/><path clip-rule="evenodd" class="bbzwh_4tl"/></g></mask></defs><path mask="url(#SVGHmRZQdpG)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:more-three",
	});
}

export default Component;
