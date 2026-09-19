import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n9e24_oox.css';
import '../../css/t/t6jk6wh7q.css';
import '../../css/i/ijjc0f5ho.css';
import '../../css/r/r3toub72m.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="n9e24_oox"/><path class="t6jk6wh7q"/><path class="ijjc0f5ho"/><circle class="r3toub72m"/>`,
		"fallback": "ion:people-sharp",
	});
}

export default Component;
