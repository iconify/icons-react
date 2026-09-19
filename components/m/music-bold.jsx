import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xc9b90bna.css';
import '../../css/m/mucpf5r-l.css';
import '../../css/x/xtvamjbnd.css';
import '../../css/a/apw2ovytu.css';
import '../../css/z/zvhxhh3sp.css';
import '../../css/m/mvny730jd.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xc9b90bna"><path class="mucpf5r-l"/><ellipse class="xtvamjbnd"/><path class="apw2ovytu"/><ellipse class="zvhxhh3sp"/><path class="mvny730jd"/></g>`,
		"fallback": "glyphs:music-bold",
	});
}

export default Component;
