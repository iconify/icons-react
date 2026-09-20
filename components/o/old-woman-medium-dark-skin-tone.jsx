import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fx1wgomas.css';
import '../../css/a/awoa3lz-s.css';
import '../../css/b/bwg33hbqa.css';
import '../../css/y/y_8cdl7on.css';
import '../../css/x/xz0pf7boc.css';
import '../../css/g/g3o7nrbxy.css';
import '../../css/g/gt0iigzjr.css';
import '../../css/n/na8vr-bvk.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fx1wgomas"/><path class="awoa3lz-s"/><path class="bwg33hbqa"/><path class="y_8cdl7on"/><path class="xz0pf7boc"/><path class="g3o7nrbxy"/><path class="gt0iigzjr"/><path class="na8vr-bvk"/>`,
		"fallback": "openmoji:old-woman-medium-dark-skin-tone",
	});
}

export default Component;
