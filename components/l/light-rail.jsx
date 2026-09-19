import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b8w9ex5ed.css';
import '../../css/y/yyc1nbciz.css';
import '../../css/t/tmu17vbxh.css';
import '../../css/k/k6851h9gp.css';
import '../../css/p/paw7mjb7w.css';
import '../../css/k/k5gtkcqjb.css';
import '../../css/g/g9hgpqb1l.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="b8w9ex5ed"/><path class="yyc1nbciz"/><path class="tmu17vbxh"/><path class="k6851h9gp"/><path class="paw7mjb7w"/><path class="k5gtkcqjb"/><path class="g9hgpqb1l"/></g>`,
		"fallback": "fluent-emoji-flat:light-rail",
	});
}

export default Component;
