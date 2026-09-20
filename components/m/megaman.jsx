import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/py7ktqbvf.css';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ek1xc_qca.css';
import '../../css/x/xj83kubla.css';
import '../../css/b/bc2-7ibpv.css';
import '../../css/r/r9cjbb_3z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGNj8XZdDN" width="24" height="24" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path class="py7ktqbvf"/></mask><g mask="url(#SVGNj8XZdDN)" class="ft5dv1b6b"><path class="ek1xc_qca"/><path class="xj83kubla"/><path class="bc2-7ibpv"/><path class="r9cjbb_3z"/></g>`,
		"fallback": "streamline-cyber-color:megaman",
	});
}

export default Component;
