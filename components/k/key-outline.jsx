import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/y/y1q597bvf.css';
import '../../css/a/ad44mbiog.css';
import '../../css/l/loqsov77d.css';
import '../../css/l/lpmrlkbpq.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="y1q597bvf"/><path class="ad44mbiog"/><path class="loqsov77d"/><path class="lpmrlkbpq"/></g>`,
		"fallback": "glyphs:key-outline",
	});
}

export default Component;
