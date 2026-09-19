import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g2-tk3beh.css';
import '../../css/m/my7j9r31x.css';
import '../../css/j/jvw28gbdo.css';
import '../../css/v/vmlmfg8oq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g2-tk3beh"/><path class="my7j9r31x"/><path class="jvw28gbdo"/><path class="vmlmfg8oq"/>`,
		"fallback": "ion:printer",
	});
}

export default Component;
