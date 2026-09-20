import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/ad7xfnbza.css';
import '../../css/q/q2qfu38qw.css';
import '../../css/p/pnknbvpwt.css';
import '../../css/h/hrqmb838p.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ad7xfnbza"/><path class="q2qfu38qw"/><path class="pnknbvpwt"/><path class="hrqmb838p"/></g>`,
		"fallback": "streamline-kameleon-color:movie-file-3-duo",
	});
}

export default Component;
