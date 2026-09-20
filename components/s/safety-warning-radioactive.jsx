import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/s/swe-3q-nj.css';
import '../../css/a/aw_5gdmdj.css';
import '../../css/b/bt2b0mbtn.css';
import '../../css/p/phewpi3xx.css';
import '../../css/j/j2s027uzl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="swe-3q-nj"/><path class="aw_5gdmdj"/><path class="bt2b0mbtn"/><path class="phewpi3xx"/><path class="j2s027uzl"/></g>`,
		"fallback": "streamline-ultimate:safety-warning-radioactive",
	});
}

export default Component;
