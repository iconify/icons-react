import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w8hl5_b3j.css';
import '../../css/m/mi2k0o4ke.css';
import '../../css/c/c-hwskhdt.css';
import '../../css/a/a8dmkubxd.css';
import '../../css/g/grb_exbvn.css';
import '../../css/h/hwhzd7b5p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="w8hl5_b3j"/><path class="mi2k0o4ke"/><path class="c-hwskhdt"/><path class="a8dmkubxd"/><path class="grb_exbvn"/><path class="hwhzd7b5p"/></g>`,
		"fallback": "streamline-ultimate-color:medium-new-logo",
	});
}

export default Component;
