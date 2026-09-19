import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/e/eannamb2g.css';
import '../../css/t/tbbt23btd.css';
import '../../css/a/aqlyi4lfh.css';
import '../../css/w/w851-hbmg.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wwvp95byt"><path class="eannamb2g"/><path class="tbbt23btd"/><path class="aqlyi4lfh"/><path class="w851-hbmg"/></g>`,
		"fallback": "glyphs-poly:street-light-1",
	});
}

export default Component;
