import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/b/bjeqacbbu.css';
import '../../css/f/ffemkhx2c.css';
import '../../css/y/y917phz2u.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="bjeqacbbu"/><path class="ffemkhx2c"/><path class="y917phz2u"/></g>`,
		"fallback": "streamline-plump:ringing-bell-notification",
	});
}

export default Component;
