import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/f/f7hwlcctd.css';
import '../../css/l/lpcnlnbgj.css';
import '../../css/g/gcrwrzbef.css';
import '../../css/u/uefkvfbed.css';
import '../../css/m/m06sd407r.css';
import '../../css/k/kgz6jpbsb.css';
import '../../css/r/rl11s-bsn.css';
import '../../css/b/bbwwipbly.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="f7hwlcctd"/><path class="lpcnlnbgj"/><path class="gcrwrzbef"/><path class="uefkvfbed"/><path class="m06sd407r"/><path class="kgz6jpbsb"/><path class="rl11s-bsn"/><path class="bbwwipbly"/></g>`,
		"fallback": "solar:square-dashed-broken",
	});
}

export default Component;
