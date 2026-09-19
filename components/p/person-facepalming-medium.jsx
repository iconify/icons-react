import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xag1dhbsb.css';
import '../../css/r/rd2j3sb8z.css';
import '../../css/p/pvonxjcur.css';
import '../../css/v/vin8stbkw.css';
import '../../css/a/a76yptb3w.css';
import '../../css/n/nmx-7q8uv.css';
import '../../css/o/ow9fbjbow.css';
import '../../css/c/cnj2n6bbw.css';
import '../../css/f/f2egsuujx.css';
import '../../css/c/crckubbpe.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xag1dhbsb"/><path class="rd2j3sb8z"/><path class="pvonxjcur"/><path class="vin8stbkw"/><path class="a76yptb3w"/><path class="nmx-7q8uv"/><path class="ow9fbjbow"/><path class="cnj2n6bbw"/><path class="f2egsuujx"/><path class="crckubbpe"/></g>`,
		"fallback": "fluent-emoji-flat:person-facepalming-medium",
	});
}

export default Component;
