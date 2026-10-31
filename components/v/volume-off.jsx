import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/o/o1izuheaa.css';
import '../../css/u/uiva24bir.css';
import '../../css/o/ontfg700s.css';
import '../../css/g/ghusg13xw.css';
import '../../css/d/d074ckbgd.css';
import '../../css/e/efbdyd6tf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="o1izuheaa"/><path class="uiva24bir"/><path class="ontfg700s wm-shine"/><path class="ghusg13xw wm-k"/><path class="d074ckbgd wm-s"/><path class="efbdyd6tf"/></g>`,
		"fallback": "withicons-kawaii:volume-off",
	});
}

export default Component;
