import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d-hhj3umx.css';
import '../../css/o/o06nbyblk.css';
import '../../css/j/jorjefr2e.css';
import '../../css/b/b7on4mbto.css';
import '../../css/p/p2uj-hbxc.css';
import '../../css/g/gf1v_jbeh.css';
import '../../css/m/m6429-jzw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d-hhj3umx wm-shadow"/><path class="o06nbyblk"/><path class="jorjefr2e"/><path class="b7on4mbto"/><path class="p2uj-hbxc"/><path class="gf1v_jbeh wm-shine"/><path class="m6429-jzw"/>`,
		"fallback": "withicons-plush:panel-top",
	});
}

export default Component;
