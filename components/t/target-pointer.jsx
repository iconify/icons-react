import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hpuge3-7o.css';
import '../../css/t/t_ss00lhg.css';
import '../../css/f/f-az1xj8s.css';
import '../../css/s/sm5zcymkz.css';
import '../../css/z/z08yn9bek.css';

const viewBox = {"width":84,"height":84};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="hpuge3-7o"/><path clip-rule="evenodd" class="t_ss00lhg"/><path clip-rule="evenodd" class="f-az1xj8s"/><path clip-rule="evenodd" class="sm5zcymkz"/><path class="z08yn9bek"/></g>`,
		"fallback": "glyphs-poly:target-pointer",
	});
}

export default Component;
