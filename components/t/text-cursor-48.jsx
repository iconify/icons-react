import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vv2oc8b9w.css';
import '../../css/y/ya6awqbqs.css';
import '../../css/t/toyqfjbll.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vv2oc8b9w"/><path class="ya6awqbqs"/><path class="toyqfjbll"/>`,
		"fallback": "energy-icons:text-cursor-48",
	});
}

export default Component;
