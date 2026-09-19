import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/r/r3v884hcy.css';
import '../../css/g/g1ere0j-x.css';
import '../../css/t/t68ckc50t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="r3v884hcy"/><circle class="g1ere0j-x"/><path class="t68ckc50t"/></g>`,
		"fallback": "hugeicons:safety-pin-02",
	});
}

export default Component;
