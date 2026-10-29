import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w7veyxl9f.css';
import '../../css/c/cgzcm0sya.css';
import '../../css/b/b212i864b.css';
import '../../css/u/uvg_jkbyk.css';
import '../../css/r/r8yg9hw4q.css';
import '../../css/h/hnaektbqw.css';
import '../../css/m/ma66bcccw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w7veyxl9f wm-shadow"/><path class="cgzcm0sya wm-k"/><path class="b212i864b wm-k"/><path class="uvg_jkbyk wm-a"/><path class="r8yg9hw4q wm-a"/><path class="hnaektbqw wm-a"/><path class="ma66bcccw wm-a"/>`,
		"fallback": "withicons-pastel:table-of-contents",
	});
}

export default Component;
