import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t1fp-j6kt.css';
import '../../css/l/loui5wbsx.css';
import '../../css/a/amn_b-_3e.css';
import '../../css/l/l4css97ah.css';
import '../../css/w/wkz0_n5gi.css';
import '../../css/q/q3aj0vory.css';
import '../../css/z/zyfl6vbby.css';
import '../../css/d/dimxmhv3l.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t1fp-j6kt"/><path class="loui5wbsx"/><path class="amn_b-_3e"/><path class="l4css97ah"/><path class="wkz0_n5gi"/><path class="q3aj0vory"/><path class="zyfl6vbby"/><path class="dimxmhv3l"/>`,
		"fallback": "openmoji:man-dark-skin-tone-curly-hair",
	});
}

export default Component;
