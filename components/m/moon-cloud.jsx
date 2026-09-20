import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/b/b1w1cvb7l.css';
import '../../css/g/gqmsu3x6a.css';
import '../../css/q/qjdm5_0qw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="b1w1cvb7l"/><path class="gqmsu3x6a"/><path class="qjdm5_0qw"/></g>`,
		"fallback": "streamline-sharp-color:moon-cloud",
	});
}

export default Component;
