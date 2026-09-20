import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tw9z725_e.css';
import '../../css/l/llu4l5c-t.css';
import '../../css/d/dv5k-kbxm.css';
import '../../css/k/k9jsl_s7l.css';
import '../../css/i/i95m7f66s.css';
import '../../css/g/gitxq1b5k.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tw9z725_e"/><path class="llu4l5c-t"/><path class="dv5k-kbxm"/><path class="k9jsl_s7l"/><path class="i95m7f66s"/><path class="gitxq1b5k"/>`,
		"fallback": "openmoji:sad-but-relieved-face",
	});
}

export default Component;
