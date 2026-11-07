import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xtpeb-edw.css';
import '../../css/p/pih3221qt.css';
import '../../css/c/c3iyeebaf.css';
import '../../css/r/r03geaczj.css';
import '../../css/x/x0524kbeg.css';
import '../../css/x/x-5281-ro.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xtpeb-edw"><path class="pih3221qt"/><path class="c3iyeebaf"/><path class="r03geaczj"/><path class="x0524kbeg"/></g><path class="x-5281-ro"/>`,
		"fallback": "solar:magic-wand-3-bold-duotone",
	});
}

export default Component;
