import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qpt2i3bws.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qpt2i3bws"/>`,
		"fallback": "gravity-ui:person-planet-earth",
	});
}

export default Component;
