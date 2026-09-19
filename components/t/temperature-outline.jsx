import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/ar-s6cb1i.css';
import '../../css/l/lruiq3bxa.css';
import '../../css/w/wdiux7bes.css';
import '../../css/r/r4byq35fv.css';
import '../../css/m/mlq6x5bsu.css';
import '../../css/l/l320lnnvt.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="ar-s6cb1i"/><path class="lruiq3bxa"/><path clip-rule="evenodd" class="wdiux7bes"/><path clip-rule="evenodd" class="r4byq35fv"/><path class="mlq6x5bsu"/><path clip-rule="evenodd" class="l320lnnvt"/></g>`,
		"fallback": "glyphs:temperature-outline",
	});
}

export default Component;
