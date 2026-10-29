import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/x/x09dvzbrc.css';
import '../../css/s/s5-9cqlug.css';
import '../../css/b/bymrjbwvt.css';
import '../../css/b/b3n8gubwl.css';
import '../../css/b/ba_pjzfdu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="x09dvzbrc"/><path class="s5-9cqlug wm-a"/><path class="bymrjbwvt wm-a"/><path class="b3n8gubwl"/><path class="ba_pjzfdu wm-a"/></g>`,
		"fallback": "withicons:school-duo",
	});
}

export default Component;
