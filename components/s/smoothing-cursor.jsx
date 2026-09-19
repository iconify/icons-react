import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9atn-hgv.css';
import '../../css/g/g3wegdcmd.css';
import '../../css/b/b1vwoqfcs.css';
import '../../css/p/p69wjibbo.css';
import '../../css/v/vbvc5mkyo.css';
import '../../css/l/l5c3r1byg.css';
import '../../css/j/j6wkytbzp.css';
import '../../css/m/m6gcd1g1i.css';
import '../../css/a/asmym5ddu.css';
import '../../css/c/cs2igwxoo.css';
import '../../css/e/eziplt3ei.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="y9atn-hgv"/><path class="g3wegdcmd"/><path class="b1vwoqfcs"/><path class="p69wjibbo"/><path class="vbvc5mkyo"/><path class="l5c3r1byg"/><path class="j6wkytbzp"/><path class="m6gcd1g1i"/><path class="asmym5ddu"/><path class="cs2igwxoo"/><path class="eziplt3ei"/>`,
		"fallback": "carbon:smoothing-cursor",
	});
}

export default Component;
