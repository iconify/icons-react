import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/q/quanm-3dx.css';
import '../../css/c/c1r51-bdj.css';
import '../../css/q/qfs5l7bnn.css';
import '../../css/e/e79_7bc6x.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="quanm-3dx"/><path class="c1r51-bdj"/><path class="qfs5l7bnn"/><path class="e79_7bc6x"/></g>`,
		"fallback": "streamline-plump-color:printer",
	});
}

export default Component;
