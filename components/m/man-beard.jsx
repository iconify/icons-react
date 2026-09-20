import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fx1wgomas.css';
import '../../css/x/x4u8pbwjc.css';
import '../../css/z/z1bvcgb-s.css';
import '../../css/q/qpaeesbtl.css';
import '../../css/t/tt-n54dwy.css';
import '../../css/e/e7pouob5w.css';
import '../../css/l/l9uo37bcj.css';
import '../../css/e/e2kl36vzi.css';
import '../../css/m/moe9szbkp.css';
import '../../css/e/epy51nlfc.css';
import '../../css/q/qhpjt5bdq.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fx1wgomas"/><g class="x4u8pbwjc"><path class="z1bvcgb-s"/><path class="qpaeesbtl"/></g><path class="tt-n54dwy"/><path class="e7pouob5w"/><path class="l9uo37bcj"/><path class="e2kl36vzi"/><path class="moe9szbkp"/><path class="epy51nlfc"/><path class="qhpjt5bdq"/>`,
		"fallback": "openmoji:man-beard",
	});
}

export default Component;
