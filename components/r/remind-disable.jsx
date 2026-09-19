import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u4oaxne3c.css';
import '../../css/g/gvjpz8u1b.css';
import '../../css/m/mpkpkxm1l.css';
import '../../css/t/t7rv11bey.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGZc3tMb2X"><g class="ft5dv1b6b"><path class="u4oaxne3c"/><path class="gvjpz8u1b"/><path class="mpkpkxm1l"/><path class="t7rv11bey"/></g></mask></defs><path mask="url(#SVGZc3tMb2X)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:remind-disable",
	});
}

export default Component;
