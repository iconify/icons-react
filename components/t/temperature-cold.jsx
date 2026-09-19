import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y0v3-tbgp.css';
import '../../css/k/kqur-5zpk.css';
import '../../css/g/gl98-fbjn.css';
import '../../css/q/qrdvunbys.css';
import '../../css/s/s-x9sz5uy.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="y0v3-tbgp"/><path class="kqur-5zpk"/><path clip-rule="evenodd" class="gl98-fbjn"/><path class="qrdvunbys"/><path class="s-x9sz5uy"/></g>`,
		"fallback": "glyphs-poly:temperature-cold",
	});
}

export default Component;
