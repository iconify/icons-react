import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/m/mq1bch56k.css';
import '../../css/r/rxfrurbja.css';
import '../../css/z/zsu9l30et.css';
import '../../css/i/ilky1shsw.css';
import '../../css/r/r6miijbml.css';
import '../../css/y/y0qy1d-rr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="mq1bch56k wm-shadow"/><path class="rxfrurbja"/><path class="zsu9l30et"/><path class="ilky1shsw"/><path class="r6miijbml"/><path class="y0qy1d-rr"/></g>`,
		"fallback": "withicons-retro:megaphone",
	});
}

export default Component;
