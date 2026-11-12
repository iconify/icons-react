import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s6df3db1i.css';
import '../../css/b/bw7r1grov.css';
import '../../css/l/lec4rdbiq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="s6df3db1i"/><path class="bw7r1grov"/><path class="lec4rdbiq"/>`,
		"fallback": "selfhst:tautulli",
	});
}

export default Component;
