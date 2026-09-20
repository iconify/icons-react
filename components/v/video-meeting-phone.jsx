import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/h/hmq1l2vbu.css';
import '../../css/g/g3e1yzbjo.css';
import '../../css/b/bnh6vyb7u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="hmq1l2vbu"/><path class="g3e1yzbjo"/><path class="bnh6vyb7u"/></g>`,
		"fallback": "streamline-cyber:video-meeting-phone",
	});
}

export default Component;
