import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/osy8scnfb.css';
import '../../css/t/tiy-3rb_y.css';
import '../../css/o/oiszezb7i.css';
import '../../css/i/i174ypf_z.css';
import '../../css/u/u3mgx8kdc.css';
import '../../css/u/ugn0xccey.css';
import '../../css/v/vi6iaxsyk.css';
import '../../css/n/n1mjunbsu.css';
import '../../css/a/achp2yxpl.css';
import '../../css/w/w44pw6byy.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><radialGradient id="SVGnL1xucik" cx="50%" cy="50%" r="49.789%" fx="50%" fy="50%"><stop offset="0%" class="osy8scnfb"/><stop offset="49.285%" class="osy8scnfb"/><stop offset="100%" class="tiy-3rb_y"/></radialGradient><radialGradient id="SVGzG1r7dEc" cx="50%" cy="50%" r="49.603%" fx="50%" fy="50%"><stop offset="0%" class="oiszezb7i"/><stop offset="18.73%" class="i174ypf_z"/><stop offset="100%" class="u3mgx8kdc"/></radialGradient><circle id="SVGN5eQqeMK" class="ugn0xccey"/></defs><circle class="vi6iaxsyk"/><mask id="SVGMX2wGdvm" class="n1mjunbsu"><use href="#SVGN5eQqeMK"/></mask><circle fill="url(#SVGnL1xucik)" mask="url(#SVGMX2wGdvm)" class="achp2yxpl"/><circle fill="url(#SVGzG1r7dEc)" mask="url(#SVGMX2wGdvm)" class="w44pw6byy"/>`,
		"fallback": "thesvg-color:moon",
	});
}

export default Component;
