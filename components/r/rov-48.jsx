import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uzaed-0-h.css';
import '../../css/z/z709enohq.css';
import '../../css/u/uqivdzdek.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uzaed-0-h"/><path class="z709enohq"/><path class="uqivdzdek"/>`,
		"fallback": "energy-icons:rov-48",
	});
}

export default Component;
