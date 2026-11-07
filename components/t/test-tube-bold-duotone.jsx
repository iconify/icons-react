import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xtpeb-edw.css';
import '../../css/z/z14_0gbyd.css';
import '../../css/f/fu6frkzrs.css';
import '../../css/p/pq4qlabdh.css';
import '../../css/b/b6d_zub2x.css';
import '../../css/d/dipfovbpe.css';
import '../../css/c/cuz1aeb8f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xtpeb-edw"><path class="z14_0gbyd"/><path class="fu6frkzrs"/></g><path class="pq4qlabdh"/><path class="b6d_zub2x"/><path class="dipfovbpe"/><path class="cuz1aeb8f"/>`,
		"fallback": "solar:test-tube-bold-duotone",
	});
}

export default Component;
