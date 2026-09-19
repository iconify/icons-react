import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g2qll0bhn.css';
import '../../css/f/f0a4gwbcn.css';
import '../../css/n/n248iunwv.css';
import '../../css/l/ly-a8052m.css';
import '../../css/k/k___aiysz.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGnYJ3NemD"><g class="ft5dv1b6b"><path class="g2qll0bhn"/><path class="f0a4gwbcn"/><rect class="n248iunwv"/><path class="ly-a8052m"/><circle transform="matrix(0 -1 -1 0 10 14)" class="k___aiysz"/><circle transform="matrix(0 -1 -1 0 16 14)" class="k___aiysz"/></g></mask></defs><path mask="url(#SVGnYJ3NemD)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:locking-web",
	});
}

export default Component;
