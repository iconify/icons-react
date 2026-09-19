import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rno3sddau.css';
import '../../css/z/ztfn3-bwv.css';
import '../../css/l/lumxgtwyw.css';
import '../../css/s/seb266b3f.css';
import '../../css/n/nbvog9b1p.css';
import '../../css/x/xph0rybfc.css';
import '../../css/o/ou3m-s45g.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rno3sddau"/><path class="ztfn3-bwv"/><path class="lumxgtwyw"/><path class="seb266b3f"/><path class="nbvog9b1p"/><path class="xph0rybfc"/><path class="ou3m-s45g"/>`,
		"fallback": "fxemoji:tanabatatree",
	});
}

export default Component;
