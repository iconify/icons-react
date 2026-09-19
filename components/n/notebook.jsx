import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e-82j0bot.css';
import '../../css/f/fm7v_uc_g.css';
import '../../css/t/t4fkk70cc.css';
import '../../css/o/o6g1-kwkw.css';
import '../../css/w/w3rpynb6d.css';
import '../../css/b/blfbx78yt.css';
import '../../css/a/aajz-p6sg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e-82j0bot"/><circle class="fm7v_uc_g"/><path class="t4fkk70cc"/><path class="o6g1-kwkw"/><path class="w3rpynb6d"/><path class="blfbx78yt"/><path class="aajz-p6sg"/>`,
		"fallback": "fxemoji:notebook",
	});
}

export default Component;
