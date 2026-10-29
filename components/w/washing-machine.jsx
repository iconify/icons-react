import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/r/rwx8arbdh.css';
import '../../css/d/dbwmo8bvj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="rwx8arbdh"/><path class="dbwmo8bvj wm-a"/></g>`,
		"fallback": "withicons:washing-machine",
	});
}

export default Component;
