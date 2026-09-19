import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hv130ab-t.css';
import '../../css/g/gopxn0bty.css';
import '../../css/t/t-9twgrad.css';
import '../../css/m/mfdkm_-jy.css';
import '../../css/n/n9w1ojbeo.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGWpwvuGAr"><g class="hv130ab-t"><path clip-rule="evenodd" class="gopxn0bty"/><path class="t-9twgrad"/><path class="mfdkm_-jy"/><path class="n9w1ojbeo"/></g></mask></defs><path mask="url(#SVGWpwvuGAr)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:switch-themes",
	});
}

export default Component;
