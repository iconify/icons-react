import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bsargfbfj.css';
import '../../css/m/m0c1ljb5z.css';
import '../../css/p/p_3zmsvya.css';
import '../../css/y/y03uhh7-l.css';
import '../../css/q/qhime-bfd.css';
import '../../css/a/ahr9yx4nn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bsargfbfj"/><path class="m0c1ljb5z"/><g class="p_3zmsvya"><path class="y03uhh7-l"/><path class="qhime-bfd"/></g><path class="ahr9yx4nn"/></g>`,
		"fallback": "tdesign:museum",
	});
}

export default Component;
