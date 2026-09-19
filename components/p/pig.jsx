import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c4g9c6bca.css';
import '../../css/p/prks0ukbo.css';
import '../../css/r/rod9hkbdu.css';
import '../../css/f/fxzrjioav.css';
import '../../css/r/rlachkb9o.css';
import '../../css/x/xzl89uk0h.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG2YbnhcjV"><g class="ft5dv1b6b"><path class="c4g9c6bca"/><ellipse class="prks0ukbo"/><circle class="rod9hkbdu"/><circle class="fxzrjioav"/><circle class="rlachkb9o"/><circle class="xzl89uk0h"/></g></mask></defs><path mask="url(#SVG2YbnhcjV)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:pig",
	});
}

export default Component;
