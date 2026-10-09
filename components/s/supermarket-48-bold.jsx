import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i_u3zdbvg.css';
import '../../css/q/qp6nmibfd.css';
import '../../css/i/ihmii9b0s.css';
import '../../css/l/lg9puybut.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i_u3zdbvg"/><path class="qp6nmibfd"/><path class="ihmii9b0s"/><path class="lg9puybut"/>`,
		"fallback": "energy-icons:supermarket-48-bold",
	});
}

export default Component;
